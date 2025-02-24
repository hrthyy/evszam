function load_table() {

    var new_card;
    var desc;
    
    SOROK_DATA.forEach((elem, i) => {
        new_card = '<div class="leiras-card" id="leiras-card-'+ String(i) + '">';

        if (elem[0] == "SEPARATOR") { // kategoriacimek
            new_card += '<h2 class="leiras-card-esemeny leiras-card-separator">';
            new_card += elem[1];
            new_card += '</h2><hr class="leiras-card-hr"></div>';
        } else { // nem kategoriacimek (sima entryk)
            
            new_card += '<h3 class="leiras-card-esemeny">';
            new_card += elem[1];
            new_card += '</h3>';

            new_card += '<h4 class="leiras-card-evszam">';
            new_card += dt_format(i);
            new_card += '</h4>';

            desc = htmlspecialchars(LEIRASOK_DATA[i]);
            if (desc != "[NINCS]") {
                new_card += '<p class="leiras-card-text">';
                if (desc) {new_card += LEIRASOK_DATA[i];}
                else {new_card += '<i>Még nincs leírás...</i>'}
                
                new_card += '</p>';
            }
            new_card += '<hr class="leiras-card-hr"></div>';

        }

        document.getElementById('leiras-table').innerHTML += new_card;
    });

}

function htmlspecialchars(txt) {
    txt = txt.replace(/</g, "");
    txt = txt.replace(/>/g, "");
    txt = txt.replace(/'/g, "");
    txt = txt.replace(/"/g, "");
    txt = txt.replace(/&/g, "");
    
    return txt
}

const MONTH_FORMAT = [
    "január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"
]


function dt_format(dt) { // ez kb ugyanazt tudja, mint a date_format a script.js-ben
    // dt: a datum indexe a SOROK_DATA arrayben


    // specialisok
    if (20==dt) {return "Kr. e. 6. - Kr. u. 29/31";}
    else if (118==dt) {return "1804 - 1814/1815";}
    else if (143==dt) {return "1848/1867 - 1916";}

    // indexbol lekeri a datum stringet
    else {dt = SOROK_DATA[dt][0]}


    if (dt.includes('sz')) {
        dt = dt.replace('-','Kr. e. ');
        return dt.replace('sz','. század');
    }

    if (dt.includes('c')) {
        dt = dt.replace('-',"Kr. e. ");
        return dt.replace("c"," körül");
    }

    
    if (dt.includes(':')) {

        //dt = dt.replace('-', 'Kr. e. ');
        dt = dt.split(':');
        dt[0] = leading_zero(dt[0]);
        dt[1] = leading_zero(dt[1]);

        return dt[0] + ' - ' + dt[1];
    }


    //dt = dt.replace('-', 'Kr. e. ');
    return leading_zero(dt);
}

function leading_zero(date) {
    date = String(date).split('.');
    date[0] = date[0].replace('-',"Kr. e. ");

    if (date.length == 1) {
        return date[0];
    } else if (date.length == 2) {
        return date[0] + '. ' + MONTH_FORMAT[Number(date[1])-1];
    } else {
        return date[0] + '. ' + MONTH_FORMAT[Number(date[1])-1] + ' ' + date[2] + '.';
    }

}

function filter_search() {
    let txt = document.getElementById('leiras-search').value.toLowerCase().trim();


    if (!txt) { // ha nincs beirva semmi az egyenlo egy resettel
        clear_search();
    } else { // kereses
        document.querySelectorAll('.leiras-card').forEach((div, i) => {
            if (!div.innerHTML.includes('separator') && !div.innerHTML.toLowerCase().includes(txt)) {div.classList.add('hidden');}
            else {div.classList.remove('hidden');}
        });  
    }

}

function clear_search() {
    document.querySelectorAll('.leiras-card').forEach((div, i) => {
        div.classList.remove('hidden');
    });  
}
