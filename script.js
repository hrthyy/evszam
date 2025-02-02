

function toggle(obj) { // nem teszteltem
    obj.classList.toggle("hidden")
}
function show(obj) {
    obj.classList.remove("hidden")
}
function hide(obj) {
    obj.classList.add("hidden")
}

const BLOKKOK_SZAMA = 12
var KERDESEK_SZAMA = SOROK_DATA.length - BLOKKOK_SZAMA

 
const ROMAI_FORMAT = [
    "i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii","xiii","xiv","xv","xvi","xvii","xviii",
    "xix","xx","xxi"
]

const MONTH_FORMAT = [
    "jan","feb","mar","apr","maj","jun","jul","aug","sze","okt","nov","dec"
]
const FULL_MONTH_FORMAT = [
    "január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"
]

function print(s) {
    //console.log(s)
}

function toldalek_format(n) {
    // visszaadja milyen toldalek lesz az adott szam utan (-tól vagy -től)
    return "tól" // egyelore
}

function ymd_format(date) {
    // seged fuggveny a date_format()-hoz
    // a bemenet kizarolag ev.h.n tipusu (n hianyozhat, n es h hianyozhat)
    date = String(date)
    date = date.split('.')
    date[0] = date[0].replace('-',"Kr. e. ")

    if (date.length == 1) {
        return date[0]
    } else if (date.length == 2) {
        return date[0] + '. ' + FULL_MONTH_FORMAT[Number(date[1])-1]
    } else {
        return date[0] + '. ' + FULL_MONTH_FORMAT[Number(date[1])-1] + ' ' + date[2] + '.'
    }

}

function date_format(dt) {
    // ez lesz hasznalva a helyes valaszok kiirasanal es
    // a kerdesnel hogy mi tortent ekkor: formazni kell
    
    if (TIPUSOK_DATA["spec"].includes(dt)) {
        switch (dt) {
            case 20:
                return "Kr. e. 6. - Kr. u. 29/31"
                break
            case 118:
                return "1804 - 1814/1815"
                break
            case 143:
                return "1848/1867 - 1916"
                break
        }    
    }
    
    let ymd = SOROK_DATA[dt][0]

    if (TIPUSOK_DATA["szazad"].includes(dt)) {
        ymd = ymd.replace('-',"Kr. e. ")
        return ymd.replace("sz",". század")
    }
    if (TIPUSOK_DATA["korul"].includes(dt)) {
        ymd = ymd.replace('-',"Kr. e. ")
        return ymd.replace("c"," körül")
    }

    if (TIPUSOK_DATA["tolig"].includes(dt)) {
        ymd = ymd.split(':')
        ymd[0] = ymd_format(ymd[0])
        ymd[0] = ymd[0].replace('-',"Kr. e. ")
        ymd[1] = ymd_format(ymd[1])
        ymd[1] = ymd[1].replace('-',"Kr. e. ")
        return ymd[0] + " - " + ymd[1]
    }

    return ymd_format(ymd)
}

var DATA_LEN = SOROK_DATA.length
var INDEX_POOL = [] // ezekbol az indexekbol lesznek a kerdesek
var CONST_INDEX_POOL = []
for (i = 0;i<DATA_LEN;i++) {  // szamok 0tol 310ig, kiveve a SEPARATORokat, mert azok nem kerdesek
    if (!TIPUSOK_DATA.SEPARATOR.includes(i) ){INDEX_POOL.push(i);CONST_INDEX_POOL.push(i)}
}
shuffle(INDEX_POOL)

function randints_range(n) {
    shuffle(INDEX_POOL);
    return INDEX_POOL.slice(0,n);

}

function get_block_index(felaIndex) {
    // bemenet: egy SOROK_DATA index
    // kimenet: az a separator sorszama, amelyikben a bemenet index talalhato

    for (sep=0;sep<BLOKKOK_SZAMA -1 ;sep++) {
        if (TIPUSOK_DATA["SEPARATOR"][sep] < felaIndex && felaIndex < TIPUSOK_DATA["SEPARATOR"][sep+1]) {
            return sep
        }
    }
    return BLOKKOK_SZAMA-1 // ha nem talalja meg eddig akkor biztos az utolso blokk
}

function get_options_from_sep(sepIndex, kivetel) { 
    // int sepIndex: ebbol a blokkbol visszaadja az osszes evszamot
    // int kivetel: a jelen kerdesre a valasznak az indexe
    // visszaad 3 hamis valaszlehetoseget az adott blokkbol (de lehet attol meg helyes valamelyik)
    
    // ha szazad, akkor ez az egy kerdes lehetseges
    if (TIPUSOK_DATA["szazad"].includes(kivetel)) {
        let arr = []
        for (k=0;k<4;k++) {
            if (kivetel != TIPUSOK_DATA["szazad"][k]) {arr.push(TIPUSOK_DATA["szazad"][k])}
        }
        shuffle(arr)
        print(arr)
        return arr
    }


    let seps = TIPUSOK_DATA["SEPARATOR"]
    let arr = []
    let l = SOROK_DATA.length -1
    if (sepIndex != BLOKKOK_SZAMA-1) {l = seps[sepIndex+1]}

    for (k=seps[sepIndex]+1 ; k<l; k++) {
        if (k!=kivetel) {arr.push(k)}
    }
    
    // kivalaszt 3-at
    shuffle(arr)
    return arr.slice(0,3)

    //print("from: " + seps[sepIndex] + " to: " + l);print(sepIndex+ ". DEBUG: "+arr)
}

// GAME VARS

// elore beallitott vars
var game_mode = "evszam" // "evszam" vagy "esemeny" lehet. eldonti, hogy melyiket kell a jatekosnak beirni
var fela_szama = 10 // hanyat valaszt ki a SOROK_DATA arraybol (hany feladat lesz)

// minden jateknal ujra generalt vars
var fela_indexek = [] // a feladatok indexei a data.js arrayekhez
var fela_ctr = -1 // eppen hanyadik feladat
var fela_pontszam = 0
var tmp

var options_indexek = [] // esemeny modban az extra valaszok indexei
var valasz_indexek = [] // esemeny modban ha a valasz tipusa kizarolag normal,
                        // akkor letesztel minden mas kizarolag normal valaszt
                        // es azokat is lehet helyesen bejelolni

var esemeny_valaszok = [false, false, false, false] // esemeny modban a user altal kivalasztottak indexei

var alreadyTested = false
var testResult = false
var VALASZ_GLOBAL_COPY = {
    "evszam": "",
    "esemeny_nevek": [
        "","","",""
    ],
    "esemeny_joe": [
        false, false, false, false
    ]
}

/* 
for (o=0;o<309;o++) {
    print(SOROK_DATA[o][0])
    print("index "+o+" -> "+ date_format(o))
}
*/


function set_game_mode(txt) {
    let evszam_selector = document.getElementById("mode-evszam-button")
    let esemeny_selector = document.getElementById("mode-esemeny-button")

    game_mode = txt
    if (txt == "evszam") {
        evszam_selector.disabled = true
        esemeny_selector.disabled = false
    } else if (txt == "esemeny") {
        evszam_selector.disabled = false
        esemeny_selector.disabled = true
    }
    print(game_mode)
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}


function sanitized(txt) {
    // whitespaceket kitorolni
    txt = txt.trim().toLowerCase();
    txt = txt.replace(/\s{2,}/g, " "); // minden legalabb 2 karakter hosszu space gapet lecserel 1 spacere
    
    // ekezetek (csak ez az 5 kell, a honapok es a "korul" szo miatt)
    txt = txt.replace(/á/g, "a");
    txt = txt.replace(/ú/g, "u");
    txt = txt.replace(/ó/g, "o");
    txt = txt.replace(/ö/g, "o");
    txt = txt.replace(/ü/g, "u");
    
    return txt
}

function get_month_num(m) { // m:String
    for (let j=0;j<12;j++) {
        if (m.includes(MONTH_FORMAT[j])) {
            return j
        }
    }
    return 0 // invalid input
}

function month_format(m) { // m:String
    m=m.trim()
    if (m.length == 1) {print("month_format meghivva: "+m);return m}
    if (m[0]=='0') {print("month_format meghivva: "+m[1]);return m[1]} // leszedi a leading zerot
    if (["10","11","12"].includes(m)) {print("month_format meghivva: "+m);return m}

    
    //let pattern = new RegExp( ".{0,}"+ MONTH_FORMAT[get_month_num(m)] +".{0,}" )
    m = String(1+get_month_num(m))
    print("month_format meghivva: "+m)
    return m

    /* 
    print("regex replace: " + MONTH_FORMAT[m-1] + " és " + m)
    m.replace(MONTH_FORMAT[m-1], m)
    //let pattern = new RegExp(String.raw`${MONTH_FORMAT[m-1]}`, "g");
    print("month_format meghivva: "+m)
    return m
    */
}
function day_format(d) { // d:String
    d=d.trim()
    if (d.length == 1) {print("day_format meghivva: "+d);return d}
    if (d[0]=='0') {print("day_format meghivva: "+d[1]);return d[1]}
    print("day_format meghivva: "+d)
    return d
}




function new_game() {
    // set game questions from radio buttons
    fela_szama = Number(document.querySelector('input[name="qcount"]:checked').value);

    
    // set ui
    hide(document.getElementById("game-settings"))
    show(document.getElementById("game-div"))

    hide(document.getElementById("new-game-button"))
    show(document.getElementById("next-question-button"))

    hide(document.getElementById("version"))
    
    // reset vars
    alreadyTested = false
    testResult = false
    esemeny_valaszok = [false, false, false, false]

    fela_ctr = -1
    fela_pontszam = 0

    if (fela_szama == 298) {
        shuffle(CONST_INDEX_POOL)
        fela_indexek = CONST_INDEX_POOL
    } else {
        fela_indexek = randints_range(fela_szama)
    }
    
    // teszthez:
    //fela_indexek = [19,19,19,19,19,200]
    //fela_indexek = [20,118,143,20,118,143]
    //fela_indexek = [5,13,41,44,5,13,41,44,5,13]


    if (game_mode == "evszam") {
        
    } else if (game_mode == "esemeny") {
        
    }


    // show/hide correct div
    if (game_mode == "evszam") {
        hide(document.getElementById("esemeny-input-div"))
        show(document.getElementById("evszam-input-div"))
    } else {
        hide(document.getElementById("evszam-input-div"))
        show(document.getElementById("esemeny-input-div"))
    }

    print(fela_indexek);
    next_question()
}
function next_question() {
    print("NEXT QUESTION CALL")

    // fix buttons
    alreadyTested = false
    
    document.getElementById("show-ans-button").disabled = false

    fela_ctr += 1
    print("fela_ctr uj erteke "+fela_ctr)
    document.getElementById("question-number").innerHTML = String(1+fela_ctr) + ". kérdés<br>"

    // ha show_ans()-al ki lett iratva ide hogy helyes vagy helytelen, akkor le kell venni a formazast
    document.getElementById("question-type").classList.remove("helyes");
    document.getElementById("question-type").classList.remove("helytelen");

    if (game_mode == "evszam") {
        // clear 'helyes'
        document.getElementById("helyes-evszam").innerHTML = ""

        // unlock input text box
        document.getElementById("evszam-input").disabled = false

        document.getElementById("evszam-input").classList.remove("helyes")
        document.getElementById("evszam-input").classList.remove("helytelen")

        document.getElementById("evszam-input").value = ""; // reset answer
        
        if (TIPUSOK_DATA["tolig"].includes(fela_indexek[fela_ctr])) {
            document.getElementById("question-type").innerHTML = "Mettől meddig tartott?<br>"
        } else {
            document.getElementById("question-type").innerHTML = "Mikor történt?<br>"
        }
        
        
        document.getElementById("question-title").innerHTML = SOROK_DATA[fela_indexek[fela_ctr]][1]
    
    
    } else if (game_mode == "esemeny") {
        // clear 'helyes'
        document.querySelectorAll(".helyes-esemeny").forEach((elem)=>{
            elem.innerHTML = "";
        })

        // reset vars (a test_input fuggvenyben is)
        esemeny_valaszok = [false, false, false, false]
        document.querySelectorAll(".esemeny-checkbox").forEach((elem)=>{
            elem.src = "assets/img/checkbox-off.png"
        })

        if (TIPUSOK_DATA["tolig"].includes(fela_indexek[fela_ctr])) {
            document.getElementById("question-type").innerHTML = "Milyen esemény tartott ettől eddig?<br>"
        } else {
            document.getElementById("question-type").innerHTML = "Mi történt ekkor?<br>"
        }
        
        document.getElementById("question-title").innerHTML = date_format(fela_indexek[fela_ctr])
        
        // checkbox valaszok beallitasa

        options_indexek = get_options_from_sep( get_block_index(fela_indexek[fela_ctr]), fela_indexek[fela_ctr])
        
        // multiselect valaszok (ha a jelen fela index kizarolag normal type)
        valasz_indexek = get_valasz_indexek(options_indexek, fela_indexek[fela_ctr])

        options_indexek.push(fela_indexek[fela_ctr]) // hozzaadja a jelen feladatot
        shuffle(options_indexek)
        document.querySelectorAll('.esemeny-option-cim').forEach( (element,index) => {
            element.innerHTML = SOROK_DATA[options_indexek[index]][1]
            
            // teszt cucc // element.innerHTML += " | " + SOROK_DATA[options_indexek[index]][0]
        });

        // unlock input checkboxes:
        // if alreadyTested is false, checkboxes are unlocked.

        // set helyes valasz esemeny 
        options_indexek.forEach((elem,index) => {
            VALASZ_GLOBAL_COPY.esemeny_nevek[index] = elem;
            if (valasz_indexek.includes(elem)) {
                VALASZ_GLOBAL_COPY.esemeny_joe[index] = true;
            } else {
                VALASZ_GLOBAL_COPY.esemeny_joe[index] = false;
            }
        });
    }
    
    // teszt cucc
    //document.getElementById("csalas").innerHTML = SOROK_DATA[fela_indexek[fela_ctr]][0] + "<br>" + SOROK_DATA[fela_indexek[fela_ctr]][1]
}

function get_valasz_indexek(opt, kivetel) {
    // bemenet: Array[int] opt: a fake indexek
    //          int kivetel: a valasz indexe 
    // kimenet: a fake indexek kozul azok, amelyek tenylegesen valasznak jelolhetok (egy listaban)


    // egyetlen kivetel ez az okori ize
    if ([2,3].includes(kivetel)) {
        return [2,3]
    }

    let flagNormal = true
    let kimenet = []
    kimenet.push(kivetel)
    if (SOROK_DATA[kivetel].length == 3) {
        flagNormal = false
        print("flagnormal false, kimenet = "+kimenet)
    }

    if (flagNormal) {
        print("flagNormal testing")
        kivetel = SOROK_DATA[kivetel][0]
        let curr
        print("valasz ymd: "+kivetel)
        opt.forEach((elem,index) => {

            // innentol flagNormal arra lesz hasznalva, hogy 
            // a jelen teszt eredmenyebol ki lehessen ugrani ha rossz
            flagNormal = true
            curr = SOROK_DATA[elem][0]
            
            if (TIPUSOK_DATA["tolig"].includes(elem)) {
                print(elem + ". index egy TOLIG")
                flagNormal = false
            } else if (TIPUSOK_DATA["korul"].includes(elem)) {
                print(elem + ". index egy KORUL")
                flagNormal = false
            } else if (TIPUSOK_DATA["szazad"].includes(elem)) {
                print(elem + ". index egy SZAZAD")
                flagNormal = false
            } else if (TIPUSOK_DATA["spec"].includes(elem)) {
                print(elem + ". index egy SPEC")
                flagNormal = false
            }

            if (flagNormal) {print(elem+". index egy NORMAL (vagy KRE)")}
            
            if (flagNormal && (curr != kivetel) ) {
                flagNormal = false
            }

            /* inkabb nem
            if (flagNormal && ymd.m) {
                if(!curr.includes("."+ymd.m)) {
                    flagNormal = false
                }
                    
            }
            if (flagNormal & ymd.d) {
                if(!curr.includes("."+ymd.d)) {
                    flagNormal = false
                }
            }

            // ha kre akkor meg egy teszt
            if (flagNormal && TIPUSOK_DATA["kre"].includes(elem)) {
                if ()
            }
            */

            if (flagNormal) {
                print(elem + ". új helyes válasz!    ======= EZ LENNI ERDEKES =======")
                print(SOROK_DATA[elem][1])
                print('\n')
                kimenet.push(elem)
            } else {
                print(elem + ". fake válasz!")
                print(SOROK_DATA[elem][1])
                print('\n')
            }
        })
    }

    // if !flagNormal
    return kimenet

}

function end_game() {
    // set ui
    hide(document.getElementById("next-question-button"))
    show(document.getElementById("new-game-button"))

    show(document.getElementById("game-stats-div"))
    document.getElementById("game-stats-points").innerHTML = "Pontszám: " + String(fela_pontszam) + " / " + String(fela_szama)
    hide(document.getElementById("game-div"))
}

// game settings menu
function select_game() {
    show(document.getElementById("game-settings"))
    hide(document.getElementById("game-div"))
    hide(document.getElementById("game-stats-div"))

    show(document.getElementById("version"))
}

function submit_input(showAns = false) {
    if (!alreadyTested) {
        testResult = test_input()
        alreadyTested = true
    }

    if (showAns) {
        show_ans()
        return
    }

    if (1+fela_ctr < fela_szama) {
        end_testing( testResult ); // next_question() called here
    } else {
        end_game();
    }
}

function show_ans() {
    document.getElementById("show-ans-button").disabled = true

    if (testResult) {
        document.getElementById("question-type").innerHTML = "A válasz helyes."
        document.getElementById("question-type").classList.add("helyes");
    } else {
        document.getElementById("question-type").innerHTML = "A válasz helytelen."
        document.getElementById("question-type").classList.add("helytelen");
    }

    if (game_mode == "evszam") 
    {
        // lock input
        document.getElementById("evszam-input").disabled = true


        if (testResult) {
            document.getElementById("evszam-input").classList.add("helyes")
        } else {
            document.getElementById("evszam-input").classList.add("helytelen")
        }

        document.getElementById("helyes-evszam").innerHTML = "Helyes válasz: " + date_format(VALASZ_GLOBAL_COPY.evszam)
    }
    else if (game_mode == "esemeny") 
    {
        // unlock input checkboxes:
        // if alreadyTested is true, checkboxes are locked.

        document.querySelectorAll(".helyes-esemeny").forEach((elem,index) => {
            // date
            elem.innerHTML = date_format(VALASZ_GLOBAL_COPY.esemeny_nevek[index])
            
            //color
            if (VALASZ_GLOBAL_COPY.esemeny_joe[index]) {
                elem.classList.remove("helytelen")
                elem.classList.add("helyes")
            } else {
                elem.classList.remove("helyes")
                elem.classList.add("helytelen")
            }

        });
    }
}

function get_ymd(s) { // s:string
    s = s.trim().split('.')
    
    ymd = {"y":0,"m":0,"d":0}

    if (s.length == 0) {
        ymd.y = s[0]
        return ymd

    } else if (s.length == 1) {
        ymd.y = s[0]
        ymd.m = s[1]
        return ymd

    } else if (s.length >= 2) {
        ymd.y = s[0]
        ymd.m = s[1]
        ymd.d = s[2]
        return ymd

    } else {
        print("getymd error micsodaaaaaaaaaaaaaaaaaaaaaaa")
        return ymd
    }
}

function compare_ymd(ymd1,ymd2) { // igaz, ha ymd1==ymd2, kulonben hamis
    /*
    FONTOS:
    ymd1 legyen a valasz ymd, ( helyes valasz )
    ymd2 legyen a txt ymd ( user input )
    */

    print("---- compare ymd ----")
    print("ymd1: ",ymd1)
    print("ymd2: ",ymd2)
    print("eredmeny:")

    // alternativ irasmodok korrigalasa
    if (ymd1.y) {
        if (!ymd2.y) {return false} 
        ymd2.y = ymd2.y.trim()
    }

    if (ymd1.m) { // honap atiras ha van (pl. szept -> 9)
        if (!ymd2.m) {return false}
        ymd2.m = month_format(ymd2.m)
    }
    if (ymd1.d) { // nap atiras ha van (pl. 08 -> 8)
        if (!ymd2.d) {return false}
        ymd2.d = day_format(ymd2.d)
    }

    if (ymd1.y != ymd2.y) {
        print("y nem jo\n-----")
        return false
    } else if (ymd1.m != ymd2.m) {
        print("m nem jo\n-----")
        return false
    } else if (ymd1.d != ymd2.d) {
        print("d nem jo\n-----")
        return false
    } else {
        print("minden jo\n-----")
        return true
    }
}

function test_input() {
    let txt;
    let valasz;

    // HANDLE EVSZAM GAME MODE
    if (game_mode == "evszam") {

        valasz = SOROK_DATA[fela_indexek[fela_ctr]][0];
        txt = sanitized(document.getElementById("evszam-input").value);

        // set helyes valasz evszam
        VALASZ_GLOBAL_COPY.evszam = fela_indexek[fela_ctr]

        // struktura
        // ymd = {"y":0,"m":0,"d":0} // ymd -> year,month,date

        print("--- evszam test ---")
        let flagKre, flagTolig, flagKorul, flagSzazad, flagSpec, flagNormal

        print("válasz: "+txt)

        // ha normal type, azaz sima y+m+d
        if (SOROK_DATA[fela_indexek[fela_ctr]].length < 3) {flagNormal = true}

        if (!flagNormal) 
        {
        let flagek = SOROK_DATA[fela_indexek[fela_ctr]][2].split(',');
        for (i=0;i<flagek.length;i++) {
            switch (flagek[i]) {
                case "kre":
                    flagKre = true;
                    print("kre")
                    break;
                case "tolig":
                    flagTolig = true;
                    print("tolig")
                    break;
                case "korul":
                    flagKorul = true;
                    print("korul")
                    break;
                case "szazad":
                    flagSzazad = true;  
                    print("szazad")                  
                    break;
                case "spec":
                    flagSpec = true;
                    print("spec")
                    break;
            
                //default:
                //    break;
                }
            }


            if (flagSpec) { // manualis teszt a 3 special case-re
                let spec_index = fela_indexek[fela_ctr]

                txt = txt.replace(/\s{0,}:\s{0,}/g,':')
                txt = txt.replace(/\s{0,}\/\s{0,}/g,'/')

                print("txt a spec sanitize utan: "+txt)

                if (spec_index == 20) { // jezus elete
                    print("case20")
                    if (txt.search(/.{0,}6.{0,}:.{0,}29.{0,}\/.{0,}31.{0,}/) == -1) {
                        print("629/31 regex fail -> helytelen")
                        return false;
                    } else if (!txt.includes('-') && txt.search(/.{0,}k.{0,}r.{0,}e.{0,}/) == -1 ) {
                        print("kre regex fail -> helytelen")
                        return false
                    } else {print("helyes");return true}

                } else if (spec_index == 118) { // napoleon csaszarsaga
                    print("case118")
                    if (txt.search(/1804:1814\/1815/) != -1) {
                        print("helyes")
                        return true;
                    } else {print("1804:1814/1815 regex fail -> helytelen");return false}

                } else if (spec_index == 143) { // ferenc jozsef uralkodasa
                    print("case143")
                    if (txt.search(/1848\/1867:1916/) != -1) {
                        print("helyes")
                        return true;
                    } else {print("1848/1867:1916 regex fail -> helytelen");return false}

                } else {print("SPEC HIBA");return true}
            }
        
            if (flagKre) {
                // alterelni a kr.e. szoveg osszes variaciojat egy - jelre
                // regex kellene
                txt = txt.replace(/r\x2e/g,'r')
                txt = txt.replace(/e\x2e/g,'e')
                let pattern = /k.{0,}r.{0,}e/g
                if (txt.search(pattern) != -1) {
                    txt = txt.replace(pattern, "-")
                } else if (txt.includes('-')) {
                    pattern = /\s{0,}-\s{0,}/g
                    txt = txt.replace(pattern, '-')
                }
                else {return false } // ha nincs benne kre vagy minuszjel nem lehet jo
                txt = txt.replace(' ','')
                print("kre szuro megvolt: "+txt)
            }

    

            if (flagSzazad) { // egyszeru, mert nincs korul-tolig kombo
                txt = txt.replace(/\s{0,}/g,'')
                txt = txt.replace(/\x2e{0,}/g,'') // x2e -> asciiban a 2E a pont (.)
                let valasz_ev = valasz.split('s')[0] // pl. -5sz -> -5
                txt = txt.replace(/\s{0,}sz.{0,}/g, "sz")

                if (!txt.includes("sz")) {
                    return false // ha nincs benne legalabb a "sz" akkor nemjo
                } 
                else if (!txt.includes(valasz_ev) && !txt.includes(ROMAI_FORMAT[ Math.abs(Number(valasz_ev)) -1])) {
                    return false
                    // ha nincs benne a valasz szam vagy romai szam akkor nemjo
                    // kre teszt mar lefutott az elejen
                } else {
                    print("szazad bele van irva szuper")
                }
            }

            
            if (flagKorul) { // egyszeru, mert nincs szazad-tolig kombo
                let valasz_ev = valasz.split('c')[0] // leszedi a c-t a vegerol
                txt = txt.replace(/\s{1,}c\s{1,}/g, "c")
                txt = txt.replace(/\s{1,}k.{0,}/g, "c") // ha valaki azt irja hogy 'c' vagy azt hogy 'korul', akkor is jo az ellenorzes
                if (txt.includes("c") && txt.includes(valasz_ev)) {
                    print("korul bele van irva szuper")
                } else {
                    return false
                }
            }
            

            // ymd meghatarozashoz fontos, mert ha tolig, akkor 2x2 ymd kell
            if (flagTolig && !flagSzazad && !flagKorul) {
                txt = txt.replace(/\s{0,}:\s{0,}/g,':')
                if (!flagKre && txt.includes('-')) { // ha nincs kr.e. evszam, lehet hasznalni kotolejet is
                    txt = txt.replace(/\s{0,}-\s{0,}/g,':')
                }
                txt = txt.replace(/\s/g,'')

                let tolig_split
                let valasz_tolig_ymd = {"tol":{},"ig":{}};
                let txt_tolig_ymd = {"tol":{},"ig":{}};
                // tolig valasz kinyerese
                tolig_split = valasz.split(':')
                valasz_tolig_ymd.tol = get_ymd(tolig_split[0])
                valasz_tolig_ymd.ig = get_ymd(tolig_split[1])

                // tolig txt kinyerese 
                tolig_split = txt.split(':')
                if (2 == tolig_split.length) { // ha nincs kettospont
                    txt_tolig_ymd.tol = get_ymd(tolig_split[0])
                    txt_tolig_ymd.ig = get_ymd(tolig_split[1])

                    // toligsplit arra lesz hasznalva, hogy mind2 valasz jo-e
                    tolig_split[0] = compare_ymd(valasz_tolig_ymd.tol, txt_tolig_ymd.tol)
                    tolig_split[1] = compare_ymd(valasz_tolig_ymd.ig, txt_tolig_ymd.ig)
                    if (tolig_split[0] && tolig_split[1]) 
                        {return true}
                    else 
                        {return false}
                
                } else {
                    "kettospont hianyzik!! (vagy mas hiba)"
                    return false
                }

            } 
            else // ha nem tolig
            {
                print("nem normal nem tolig")
                valasz_ymd = get_ymd(valasz)
                txt_ymd = get_ymd(txt)

                return compare_ymd( valasz_ymd, txt_ymd ) 
            }
        } 
        else // if (flagNormal)
        { 
            print("normál")
            if (txt.includes('-') || -1 != txt.search(/.{0,}k.{0,}r.{0,}e.{0,}/)) {
                // ha van benne kr.e. notation
                print("normál, de van benne kr.e. -> helytelen")
                return false
            }
            valasz_ymd = get_ymd(valasz)
            txt_ymd = get_ymd(txt)

            return compare_ymd( valasz_ymd, txt_ymd )
        }
    
    
    // HANDLE ESEMENY GAME MODE
    } else if (game_mode == "esemeny") {
        // flagek
        let flagNormal

        valasz = fela_indexek[fela_ctr]
        txt = []
        
        // txt-ben azok az indexek, amiket a user bepipalt
        esemeny_valaszok.forEach( (elem,index) => {
            if (elem) {txt.push( options_indexek[index] )}
        } )

        if (!txt.length) {print("nincs input");return false;} // ha egy sincs bepipalva
        print("van input")

        print("HELYES: "+valasz_indexek)
        print("JELOLT: "+txt)
        print("--- tesztelés ---")

        if (SOROK_DATA[fela_indexek[fela_ctr]].length < 3) {flagNormal = true}

        if (valasz_indexek.length != txt.length) {print("hossz kulonbozo -> helytelen");return false}

        let mind_helyes = true
        valasz_indexek.forEach((elem,index) => {
            if (!txt.includes(elem)) {
                print(elem+"nincs benne -> helytelen");
                mind_helyes = false;
            }
        });
        if (mind_helyes) {
            print("mind benne -> helyes")
            return true
        } else {
            print("nem volt mind benne -> helytelen")
            return false
        }
        

        /*
        print("NEM flagNormal testing")
        if (txt.length == 1 && txt[0] == valasz) {
            print("egy lett kivalasztva es az jo -> helyes")
            return true;
        } else {
            print("tobb lett kivalasztva vagy egy rossz -> helytelen")
            return false;
        }
        */
        
    }
    print(txt)

    // next_question() az end_testing()-ben lesz meghivva
}

function end_testing(ans_correct) {
    print('---- end testing ----')
    print(String(1+fela_ctr) +". kerdesre VALASZ: "+ans_correct)
    if (ans_correct) {
        fela_pontszam += 1
        print("helyes")
        next_question()
    } else {
        print("helytelen")
        next_question()
    }

    
}


function toggleEsemeny(n) {
    if (alreadyTested) {
        return
    }
    //let btn = document.getElementById("esemeny-option-"+String(n))
    let cbx = document.getElementById("esemeny-checkbox-"+String(n))
    n -= 1

    if (esemeny_valaszok[n]) {
        esemeny_valaszok[n] = false;
        cbx.src = "assets/img/checkbox-off.png"
    } else {
        esemeny_valaszok[n] = true;
        cbx.src = "assets/img/checkbox-on.png"
    }
}