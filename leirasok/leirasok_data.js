/** AMI FONTOS:
 * 0. ne töröld ki sehonnan az idézőjeleket és/vagy a vesszőt utána
 * 
 * 1. ne nyomj entert, helyette \n-t írj
 * 
 * 2. ha nem írsz semmit az idézőjelek közé, akkor az oldalon az fog megjelenni,
 * hogy 'még nem adtak hozzá leírást'
 * 
 * 3. ha valahol a cím egyértelműen megmagyarázza az eseményt, és nem kell leírás,
 * akkor a ""-be azt írd, hogy [NINCS]
 * 
 * 4. ahol az van, hogy SEPARATOR, ott nem lesznek leírások,
 * azt nem veszi figyelembe a weboldal
 * 
 * 5. ha nem vesznek fel egyetemre, krokodil leszek a Nílusban
 */


const LEIRASOK_DATA = [

    // 1.) Ókor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // az újkőkor kezdete
    // -8000c
    // leiras:
    "",
    // ------------------------------

    // az Egyiptomi Birodalom egyesítése, az első államok kialakulása
    // -3000c
    // leiras:
    "",
    // ------------------------------

    // az ókor kezdete
    // -3000c
    // leiras:
    "",
    // ------------------------------

    // az ókor vége
    // 476
    // leiras:
    "A Nyugatrómai Birodalom megszűnése.",
    // ------------------------------

    // a zsidó állam fénykora - Dávid, Salamon uralkodása
    // -10sz
    // leiras:
    "",
    // ------------------------------

    // Salamon temploma Jeruzsálemben
    // -960
    // leiras:
    "Dávid király kezdte el építeni.",
    // ------------------------------

    // az első feljegyzett olimpiai játékok
    // -776
    // leiras:
    "Zeusz főisten tiszteletére rendezték Olümpiában négyévente, kizárólag férfi versenyzőknek. (Futás, birkózás, ökölvívás, pankráció (előbbi kettő kombinációja), gerelyhajítás, diszkoszvetés.) A győztest a szent olajfa ágából font koszorúval díjazták. Theodosius császár államvallássá tette a keresztényésget, ekkor szűnt meg.",
    // ------------------------------

    // Róma hagyomány szerinti alapítása
    // -753
    // leiras:
    "Első, mitikus királya Romulus, Itália és a Földközi-tenger meghódításával létrejött a Római Birodalom.",
    // ------------------------------

    // A zsidók babiloni fogsága
    // -597:-538
    // leiras:
    "A babiloni fogság vagy babiloni száműzetés a zsidó történelemnek az a szakasza, volt amikor a Júdai Királyságból a zsidókat Babilonba hurcolták.",
    // ------------------------------

    // A jeruzsálemi templom újraépítése
    // -515
    // leiras:
    "Salamon templomát, vagyis az első templomot i. e. 586-ban pusztították el, amikor a zsidókat a babiloni fogságba hurcolták.",
    // ------------------------------

    // a köztársaság létrejötte Rómában
    // -510
    // leiras:
    "A királyságot megszüntették, a királyt elűzték, megalakult a köztársaság, amelyet két 1-1 évre válaztott tisztségviselő, consul irányított. Egymást ellenőrizték az egyeduralom kialakulását megakadályozva.",
    // ------------------------------

    // Kleiszthenész reformjai
    // -508
    // leiras:
    "Kleiszthenész reformjai miatt jött létre az athéni demokrácia, kiterjesztette a polgárjogot: ezután minden szabad felnőtt férfi egyenlőnek számított, területi alapúvá tette a phülék felosztását, hozzá kötjük a cserépszavazást.",
    // ------------------------------

    // Athén fénykora
    // -5sz
    // leiras:
    "Nagyrészt Periklész sztatégoszi megbízása idején.",
    // ------------------------------

    // Periklész kora
    // -461:-429
    // leiras:
    "Változásokat hozott az athéni demokráciába. A sztratégoszok kivételével a tisztségviselők választása ezentúl sorsolással történt. A népgyűlésen résztvevők, színházba járók, esküdtbírák napidíjat kaptak. Létrejött a demokráciából élők rétege.",
    // ------------------------------

    // a marathóni csata
    // -490
    // leiras:
    "Az athéni demokrácia itt bizonyította, hogy egyenrangú az arisztokratikus Spártával",
    // ------------------------------

    // Caesar halála
    // -44
    // leiras:
    "",
    // ------------------------------

    // Az actiumi csata
    // -31
    // leiras:
    "",
    // ------------------------------

    // Augustus principátusa
    // -27:14
    // leiras:
    "",
    // ------------------------------

    // Heródes újjáépíti a jeruzsálemi templomot
    // -9
    // leiras:
    "",
    // ------------------------------

    // Jézus élete, valószínű adatok
    // -6:29/31
    // leiras:
    "",
    // ------------------------------

    // Jeruzsálem lerombolása
    // 70
    // leiras:
    "A templomot egy lázadás után rombolják le a rómaiak, ezzel a zsidó vallási élet központja is elpusztul, a zsinagógák válnak a kizárólagos helyszíneivé.",
    // ------------------------------

    // Domitianus-féle keresztényüldözés
    // 94
    // leiras:
    "",
    // ------------------------------

    // a milánói ediktum
    // 313
    // leiras:
    "Constantinus császár rendeletben engedélyezte a szabad vallásgyakorlást.",
    // ------------------------------

    // a niceai zsinat
    // 325
    // leiras:
    "Constantinus császár hívta össze, hogy az őt támogató kereszténység egységes legyen. Véglegesítették benne a hittételeket. A megfogalmazott dogmákat elítélőket (eretnekek) ültözték.",
    // ------------------------------

    // a Római Birodalom felosztása
    // 395
    // leiras:
    "A római birodalom kettészakad: Bizánci Birodalom és Nyugatrómai Birodalom lesz belőle.",
    // ------------------------------

    // a Nyugatrómai Birodalom bukása, az ókor vége
    // 476
    // leiras:
    "",
    // ------------------------------

    // 2. A) A középkori Európa világa
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // a középkor kezdete
    // 476
    // leiras:
    "Nyugatrómai Birodalom megszűnése.",
    // ------------------------------

    // a középkor vége
    // 1492
    // leiras:
    "Amerika felfedezése.",
    // ------------------------------

    // a középkor
    // 476:1492
    // leiras:
    "Nyugatrómai Birodalom bukásától Amerika felfedezéséig tartó időszak.",
    // ------------------------------

    // Bencés rend alapítása - Szent Benedek, Monte Cassino
    // 529
    // leiras:
    "Az első szerzetesrend, Szent Benedek alapította és írta a szabályrendszerét.",
    // ------------------------------

    // Mohamed futása, a muszlim időszámítás kezdete
    // 622
    // leiras:
    "Mohamed a mekkai kereskedől nyomására Medinába költözött.",
    // ------------------------------

    // a frankok győzelme az arabok felett - Poitiers
    // 732
    // leiras:
    "Az Arab Birodalom terjeszkedésének megszakadása után a birodalom és felbomlott.",
    // ------------------------------

    // Nagy Károly császárrá koronázása
    // 800
    // leiras:
    "",
    // ------------------------------

    // a verduni szerződés
    // 843
    // leiras:
    "Felosztotta a Frank Birodalmat Nagy Károly unokái között.",
    // ------------------------------

    // az egyházszakadás
    // 1054
    // leiras:
    "Az egyházi vezetők növekvő világi hatalma miatt a konfliktus megerősödött. A katolikus és az ortodox egyház szétvált.",
    // ------------------------------

    // Bolognai egyetem alapítása
    // 1088
    // leiras:
    "A középkor eéső egyeteme.",
    // ------------------------------

    // A ferences rend alapítása - Szent Ferenc, Assisi
    // 1209
    // leiras:
    "Assisi Szent Ferenc alapította. Adományokból tartották fenn magukat, oktatási tevékenységet is végeztek.",
    // ------------------------------

    // a Magna Charta kiadása
    // 1215
    // leiras:
    "Nagy Szabadságlevél. Az angol bárók 1215-ben ebben az okiratban kényszerítették Földnélküli János angol királyt a törvénytelen adók beszüntetésére és a közös döntéshozatalra.",
    // ------------------------------

    // a nagy pestisjárvány
    // 1347
    // leiras:
    "",
    // ------------------------------

    // könyvnyomtatás - Gutenberg
    // 15sz
    // leiras:
    "",
    // ------------------------------

    // Konstantinápoly török elfoglalása
    // 1453
    // leiras:
    "1453. május 29-én foglalta el II. Mehmed oszmán szultán Konstantinápolyt, ezzel megszűnt az ezeréves Bizánci Birodalom, a keleti kereszténység legfőbb központja.",
    // ------------------------------

    // 2. B) Magyar középkor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // magyarok történelme - Etelköz
    // 9sz
    // leiras:
    "",
    // ------------------------------

    // a honfoglalás
    // 895:902
    // leiras:
    "",
    // ------------------------------

    // a pozsonyi csata
    // 907
    // leiras:
    "A honfoglalást lezáró csata a keleti frankok ellen, a magyar törzsszövetség megvédte új szállásterületét.",
    // ------------------------------

    // az augsburgi csata
    // 955
    // leiras:
    "A magyar kalandozások egyik legjelentősebb csatája a magyar és német seregek között, magyar vereséggel végződött.",
    // ------------------------------

    // Géza fejedelemsége
    // 972:997
    // leiras:
    "",
    // ------------------------------

    // I. (Szent) István, mint magyar FEJEDELEM
    // 997:1000
    // leiras:
    "",
    // ------------------------------

    // I. (Szent) István, mint magyar KIRÁLY
    // 1000:1038
    // leiras:
    "1000-ben megkoronázták.",
    // ------------------------------

    // I. (Szent) László uralkodása
    // 1077:1095
    // leiras:
    "",
    // ------------------------------

    // II. András uralkodása
    // 1205:1235
    // leiras:
    "",
    // ------------------------------

    // Az Aranybulla kiadása
    // 1222
    // leiras:
    "II. András magyar király 1222-ben, Székesfehérvárott kiadott, aranypecséttel ellátott királyi dekrétuma.",
    // ------------------------------

    // IV. Béla uralkodása
    // 1235:1270
    // leiras:
    "",
    // ------------------------------

    // a tatárjárás
    // 1241:1242
    // leiras:
    "A mongolok és szövetségeseik elsősorban a 13. században bekövetkezett támadásai.",
    // ------------------------------

    // az Árpád-ház kihalása
    // 1301
    // leiras:
    "III. Andrással az Árpád-ház férfi ága kihalt.",
    // ------------------------------

    // I. Károly (Róbert) uralkodása
    // 1308:1342
    // leiras:
    "",
    // ------------------------------

    // a visegrádi királytalálkozó
    // 1335
    // leiras:
    "A Károly Róbert által szervezett visegrádi királytalálkozó a magyar, a cseh és a lengyel uralkodó együttműködésének erősítését szolgálta.",
    // ------------------------------

    // I. (Nagy) Lajos törvényei
    // 1351
    // leiras:
    "A nemesi birtokok öröklődésének szabályozása Magyarországon: eltörölte a szabad végrendelkezést, az öröklött birtok automatikusan az egyenes vagy oldalági férfi utódra száll. Ha a család fiúágon kihalt, akkor a birtok visszaszállt a királyra. 1848-ig érvényben maradt.",
    // ------------------------------

    // Luxemburgi Zsigmond uralkodása
    // 1387:1437
    // leiras:
    "",
    // ------------------------------

    // a nikápolyi csata
    // 1396
    // leiras:
    "Luxemburgi Zsigmond lovagserege vereséget szenvedett a jobban felszerelt oszmán haderőkkel szemben.",
    // ------------------------------

    // Hunyadi János hosszú hadjárat
    // 1443:1444
    // leiras:
    "A hosszú hadjárat egy Hunyadi János és I. Ulászló által vezetett török elleni hadjárat.",
    // ------------------------------

    // a várnai csata
    // 1444
    // leiras:
    "A hosszú hadjáratot lezáró ütközet, magyar vereséggel zárult, I. Ulászló elesett.",
    // ------------------------------

    // a nándorfehérvári diadal
    // 1456
    // leiras:
    "Hunyadi János megbízásából Szilágyi Mihály védte II. Mehmed szultán seregei ellen.",
    // ------------------------------

    // I. (Hunyadi) Mátyás uralkodása
    // 1458:1490
    // leiras:
    "",
    // ------------------------------

    // I. Mátyás elfoglalja Bécset
    // 1485
    // leiras:
    "",
    // ------------------------------

    // 3. A) Egyetemes koraújkor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // Újkor kezdete. Amerika felfedezése - Kolombusz
    // 1492
    // leiras:
    "Amerika felfedezése.",
    // ------------------------------

    // A reformáció kezdete - Luther Márton
    // 1517
    // leiras:
    "A katolikus egyház megújulására törekvő mozgalom, egyházszakadáshoz és a protestánt egyházak létrejöttéhez vezetett.",
    // ------------------------------

    // Augsburgi vallásbéke
    // 1555
    // leiras:
    "A Német-római Birodalomban a reformáció miatt dúló  vallásháborúkat zárta le. Az evangélikus egyház egyenjogú lett a katolikussal.",
    // ------------------------------

    // Hernán Cortés meghódítja Mexikót
    // 1518
    // leiras:
    "",
    // ------------------------------

    // Tridenti zsinat
    // 1545:1563
    // leiras:
    "A reformáció miatt, az egyházszakadást volt hivatott megakadályozni. Fontos katolikus reformok születtek itt.",
    // ------------------------------

    // a harmincéves háború
    // 1618:1648
    // leiras:
    "A háború a cseh felkelés után az északi protestáns és déli katolikus német területek közt folyt. A katolikus Habsburgokkal és szemben először protestáns uralkodók, majd a katolikus Franciaország is hadba lépett az északaikat támogatva, bizonyítva, hogy ez inkább nagyhatalmi háború volt.",
    // ------------------------------

    // a vesztfáliai békék
    // 1648
    // leiras:
    "A harmincéves háborút zárta le, és évtizedekre kialakította Európa hatalmi viszonyait.",
    // ------------------------------

    // XIV. Lajos uralkodása
    // 1643:1715
    // leiras:
    "A spanyol öröködósödési háború alatt a Habsburg I. Lipót ellen indulú francia király.",
    // ------------------------------

    // az angol Jognyilatkozat kiadása
    // 1689
    // leiras:
    "Az abszolutizmust megszűntető polgárháború lezárása, az ezután kialakult kormányzati formát hívjuk alkotmányos monarchiának, illetve parlamentarizmusnak (a törvényhozó testület szerepe miatt).",
    // ------------------------------

    // spanyol örökösödési háború
    // 1701:1714
    // leiras:
    "A Habsburgok spanyol ágának kihalása után I. Lipót és XIV. Lajos (francia király) küzdöttek a spanyol trónért.",
    // ------------------------------

    // Perzsa levelek - Montesquieu
    // 1721
    // leiras:
    "A modern alkotmányosság elméleti megalapozója. Az állam hataémát a három hatalmi ág jelenti (törvényhozás, végrehajtás, igazságszolgáltatás).",
    // ------------------------------

    // francia Enciklopédia kiadása, 35 kötetben
    // 1751:1780
    // leiras:
    "Célja az általános emberi tudás összegyűjtése volt.",
    // ------------------------------

    // osztrák örökösödési háború
    // 1740:1748
    // leiras:
    "Mária Terézia trónralépése után tört ki, a Habsburg Birodalom trónját örökölni kívánó urolkodók elutasították a Pragmatica Sanctioban megfogalmazott leányági örökösödést.",
    // ------------------------------

    // a hétéves háború
    // 1756:1763
    // leiras:
    "Európából kiinduló globális konfliktus, melyben a szembenálló felek (részben amerikai) gyarmatokért és a hatalmi pozíciójuk erősítéséért harcoltak. Nagy-Britannia nagyrészt kiszorította Franciaországot Amerikából.",
    // ------------------------------

    // James Watt gőzgép
    // 1769
    // leiras:
    "Ettől számítjuk az ipari forradalom kezdetét, melyben szinte kizárólagos energia ellátó volt, forradalmasította a közlekedést is.",
    // ------------------------------

    // az amerikai Függetlenségi nyilatkozat kiadása, az USA létrejötte
    // 1776.7.4
    // leiras:
    "A Nagy-Britannia elleni lázadásban egyesült államok ebben mondták ki függetlenségüket a felvilágosodás államelméleteivel alátámasztva.",
    // ------------------------------

    // USA alkotmány
    // 1787
    // leiras:
    "A világ legrégebben írt alkotmánya, az alapvető jogokat és az államszervezet működését írja le.",
    // ------------------------------

    // 3. B) Magyar koraújkor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // mohácsi csatavesztés, kettős királyválasztás
    // 1526
    // leiras:
    "Szulejmán serege itt üzközött meg a számbeli hátrányban lévő II. Lajos vezette haderővel. A csata a király halálával, és kettős királyválasztással (az ország két részre szakadásával) végződött.",
    // ------------------------------

    // Buda török elfoglalása, az ország tényleges három részre szakadása
    // 1541
    // leiras:
    "Szapolyai János halála után hívei csecsemő fiát választották királlyá, a két király korábbi egyezsége ellenére, miszerint I. János halála után I. Ferdinánd alatt egyesül az ország.\nFerdinánd serege ezért ostrom alá vette Budát. II. János gyámja, Fráter György a szultán segítségét kérte, aki visszaverte a Habsburg csapatokat és elfoglalta a várat.",
    // ------------------------------

    // a nagy várháborúk éve, Eger védelme
    // 1552
    // leiras:
    "Török hadjárat indult a három részre szakadt ország véglegesítésére. Eger megszállásával a királyi Magyarország és Erdély egymástól elszakítása volt a cél.",
    // ------------------------------

    // Szigetvár eleste
    // 1566
    // leiras:
    "Az idősebb Zrínyi Miklós által védett Szigetvári vár eleste, mely alatt I. Szulejmán elhunyt.",
    // ------------------------------

    // Drinápolyi béke
    // 1568
    // leiras:
    "A várháborúkat lezáró béke: ebben véglegesítették a határokat és a Habsburgok évi ajándék fizetésébe is beleegyeztek.",
    // ------------------------------

    // Tordai határozat - vallásbéke
    // 1568
    // leiras:
    "Az egyes közösségek maguk dönthették el, melyik egyházhoz tartoznak. Lehetővé tette a protestáns egyházak megjelenését Edrélyben. Jóváhagyott vallás volt a katolikus, evangélikus, református és az unitárius (az ortodox nem). Inkább vallási türelem volt, mint vallásszabadság.",
    // ------------------------------

    // Speyeri szerződés, Erdélyi Fejedelemség
    // 1570
    // leiras:
    "Megállapodás János Zsigmond és II. Miksa császár között. Ezt tekintjük az Erdélyi Fejedelemség létrejöttének.",
    // ------------------------------

    // Vizsolyi Biblia - Károli Gáspár
    // 1590
    // leiras:
    "Az első magyar bibliafordítás (református), a nyomtatás helyszínéről nevezték el.",
    // ------------------------------

    // a tizenöt éves háború
    // 1591:1606
    // leiras:
    "A Habsuburg Birodalom és az Oszmán Birodalom összecsapása a Magyar Királyság területén.",
    // ------------------------------

    // Tata visszafoglalása, patara
    // 1597
    // leiras:
    "",
    // ------------------------------

    // Bocskai István szabadságharca
    // 1604:1606
    // leiras:
    "Bocskai István vezette Habsburg ellenes felkelés.",
    // ------------------------------

    // Bethlen Gábor erdélyi fejedelem
    // 1613:1629
    // leiras:
    "",
    // ------------------------------

    // Pázmány Péter esztergomi érsek
    // 1616:1637
    // leiras:
    "A magyar ellenreformáció kiemelt alakja: rekatolizált, esztergomi érsek lett, utasítására létrejött az első magyar katolikus bibliafordítás (Káldi György), egyetemet alapított.",
    // ------------------------------

    // Zrínyi Miklós téli hadjárata, a vasvári béke
    // 1664
    // leiras:
    "Zrínyi Miklós vezette hadjárat, nagy sikereket ért el, ennek ellenére a bécsi udvar megkötötte vasvári békén visszaállították az 1663-1664-es háború előtti állapotokat.",
    // ------------------------------

    // Bécs török ostroma
    // 1683
    // leiras:
    "A török sereg második (sikertelen) kísérlete a császárváros bevételére.",
    // ------------------------------

    // Buda visszafoglalása
    // 1686
    // leiras:
    "",
    // ------------------------------

    // a karlócai béke, a török kiűzése
    // 1699
    // leiras:
    "A béke a törököket a Magyar Királyság területéről kiűző Habsburg–török háborút zárta le, amely török vereséggel zárult.",
    // ------------------------------

    // a Rákóczi-szabadságharc
    // 1703:1711
    // leiras:
    "I. Lipót német-római császár és magyar király uralkodása egyre inkább abszolutista lett, erre válaszul, a nemesi mozgalom és a jobbágyfelkelés összekapcsolódásával jött létre II. Rákóczi Ferenc vezetésével.",
    // ------------------------------

    // az ónódi országgyűlés
    // 1707
    // leiras:
    "Az országgyűlés a független magyar állam létezését volt hivatott bizonyítani. Ezen történt többek közt a Habsburg-ház trónfosztása.",
    // ------------------------------

    // a szatmári béke
    // 1711
    // leiras:
    "A Rákóczi-szabadságot záró kompromisszumos béke, melyben a fegyvert letevő kurucok amnesztiát kaptak.",
    // ------------------------------

    // Pragmatica Sanctio elfogadása a magyar országgyűlésen
    // 1723
    // leiras:
    "III. Károly törvénye (többek között) a leányági örökösödés elfogadásáról, Mária Terézia hatalomra kerülésének előfeltétele volt.",
    // ------------------------------

    // Tata az Esterházyak birtoka lett
    // 1727
    // leiras:
    "",
    // ------------------------------

    // Mária Terézia uralkodása
    // 1740:1780
    // leiras:
    "Felvilágosult abszolutista uralkodónak is hívják: a modernizációs célajit  rendeleti kormányzással valósította meg.",
    // ------------------------------

    // Úrbéri rendelet
    // 1767
    // leiras:
    "Mária Terézia jobbágy-földesúri viszonyt szabályozó rendelete: meghatározta a maximális jobbágyi terheket, elvárta a jobbágyi terhek (falunkénti) és a jobbágytelkek határainak rögzítését.",
    // ------------------------------

    // Ratio Educationis
    // 1777
    // leiras:
    "Az első állami oktatásügyi szabályozás, ösztönözte az iskolalátogatást, de nem vezette be a tankötelezettséget. (Mária Terézia)",
    // ------------------------------

    // II. József (kalapos király) uralkodása
    // 1780:1790
    // leiras:
    "Felvilágosult abszolutista uralkodó.",
    // ------------------------------

    // Türelmi rendelet
    // 1781
    // leiras:
    "A protestánsok és ortodoxok szabadon gyakorolhatták a vallásukat. (II. József)",
    // ------------------------------

    // Magyarországi népszámlálás
    // 1784
    // leiras:
    "Az első teljes területre kiterjedő népszámlálás és birtokösszesítés, új adórendszer bevezetése lehetett a célja. (II. József)",
    // ------------------------------

    // 4. A) Egyetemes újkor - 1789 - 1914
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // a Bastille ostroma, a francia forradalom kezdete
    // 1789.7.14
    // leiras:
    "",
    // ------------------------------

    // Emberi és polgári jogok nyilatkozata
    // 1789.8.26
    // leiras:
    "",
    // ------------------------------

    // jakobinus diktatúra Franciaországban
    // 1793:1794
    // leiras:
    "",
    // ------------------------------

    // Napóleon császársága
    // 1804:1814/1815
    // leiras:
    "",
    // ------------------------------

    // a waterlooi csata
    // 1815
    // leiras:
    "",
    // ------------------------------

    // Stephenson gőzmozdony
    // 1825
    // leiras:
    "",
    // ------------------------------

    // a népek tavasza, forradalmak európában
    // 1848
    // leiras:
    "",
    // ------------------------------

    // Marx kommunista kiáltvány
    // 1848
    // leiras:
    "",
    // ------------------------------

    // a krími háború
    // 1853:1856
    // leiras:
    "",
    // ------------------------------

    // szárd-piemonti-osztrák háború, a solferinoi ütközet
    // 1859
    // leiras:
    "",
    // ------------------------------

    // az USA polgárháborúja
    // 1861:1865
    // leiras:
    "",
    // ------------------------------

    // porosz-osztrák háború
    // 1866
    // leiras:
    "",
    // ------------------------------

    // a Meidzsi-restauráció
    // 1868
    // leiras:
    "",
    // ------------------------------

    // Németország egyesítése, a Német Császárság létrejötte
    // 1871
    // leiras:
    "",
    // ------------------------------

    // Benz, benzinüzemű autó
    // 1876
    // leiras:
    "",
    // ------------------------------

    // a hármas szövetség megalakulása
    // 1882
    // leiras:
    "",
    // ------------------------------

    // angol-francia szívélyes megegyezés
    // 1904
    // leiras:
    "",
    // ------------------------------

    // a hármas antant létrejötte
    // 1907
    // leiras:
    "",
    // ------------------------------

    // Ford, T-modell
    // 1908
    // leiras:
    "",
    // ------------------------------

    // 4. B) Magyarország, újkor 1790-1914
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // Széchenyi István - Hitel című művének megjelenése
    // 1830
    // leiras:
    "",
    // ------------------------------

    // a reformkor kezdete
    // 1830
    // leiras:
    "",
    // ------------------------------

    // a reformkor
    // 1830:1848
    // leiras:
    "",
    // ------------------------------

    // a rendi országgyűlés
    // 1832:1836
    // leiras:
    "",
    // ------------------------------

    // törvény a magyar nyelv államnyelvről
    // 1844
    // leiras:
    "",
    // ------------------------------

    // magyar forradalom és szabadságharc, Pesten
    // 1848.3.15
    // leiras:
    "",
    // ------------------------------

    // az áprilisi törvények
    // 1848.4.11
    // leiras:
    "",
    // ------------------------------

    // a pákozdi csata
    // 1848.9.29
    // leiras:
    "",
    // ------------------------------

    // Ferenc József uralkodása
    // 1848/1867:1916
    // leiras:
    "",
    // ------------------------------

    // a tavaszi hadjárat
    // 1849.4:1849.5
    // leiras:
    "",
    // ------------------------------

    // az isaszegi csata
    // 1849.4.6
    // leiras:
    "",
    // ------------------------------

    // a Függetlenségi nyilatkozat, Debrecen
    // 1849.4.14
    // leiras:
    "",
    // ------------------------------

    // Buda visszavétele
    // 1849.5.21
    // leiras:
    "",
    // ------------------------------

    // a világosi fegyverletétel
    // 1849.8.13
    // leiras:
    "",
    // ------------------------------

    // az aradi vértanúk és Batthyány Lajos kivégzése
    // 1849.10.6
    // leiras:
    "",
    // ------------------------------

    // a kiegyezés, Ferenc József megkoronázása
    // 1867
    // leiras:
    "",
    // ------------------------------

    // a nemzetiségi és népiskolai törvény, a horvát-magyar kiegyezés, a népiskolai törvény
    // 1868
    // leiras:
    "",
    // ------------------------------

    // Budapest egyesítése
    // 1873
    // leiras:
    "",
    // ------------------------------

    // Tisza Kálmán miniszterelnöksége
    // 1875:1890
    // leiras:
    "",
    // ------------------------------

    // a Millenium (honfoglalás)
    // 1896
    // leiras:
    "",
    // ------------------------------

    // a koalíciós válság
    // 1905
    // leiras:
    "",
    // ------------------------------

    // 5. A) A világháborúk kora 1914-1945
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // a szarajevói merénylet
    // 1914.6.28
    // leiras:
    "",
    // ------------------------------

    // az I. vh kezdete
    // 1914.7.28
    // leiras:
    "",
    // ------------------------------

    // az I. vh vége
    // 1918.11.11
    // leiras:
    "",
    // ------------------------------

    // az I. világháború
    // 1914.7.28:1918.11.11
    // leiras:
    "",
    // ------------------------------

    // Románia hadba lép az antant oldalán
    // 1916
    // leiras:
    "",
    // ------------------------------

    // oroszországi forradalmak
    // 1917
    // leiras:
    "",
    // ------------------------------

    // a februári forradalom
    // 1917
    // leiras:
    "",
    // ------------------------------

    // bolsevik hatalomátvétel Oroszországban
    // 1917
    // leiras:
    "",
    // ------------------------------

    // a versailles-i béke, a békekonferencia kezdete
    // 1919
    // leiras:
    "",
    // ------------------------------

    // a versailles-i béke aláírásának dátuma
    // 1919.6.28
    // leiras:
    "",
    // ------------------------------

    // fasiszta hatalomátvétel olaszországban
    // 1922
    // leiras:
    "",
    // ------------------------------

    // a Szovjetúnió létrejötte
    // 1922.12.30
    // leiras:
    "",
    // ------------------------------

    // a Szovjetúnió időtartama
    // 1922.12.30:1991.12.26
    // leiras:
    "",
    // ------------------------------

    // a Dawes-terv
    // 1924
    // leiras:
    "",
    // ------------------------------

    // a locarnói egyezmény
    // 1925
    // leiras:
    "",
    // ------------------------------

    // a világgazdasági válság
    // 1929:1933
    // leiras:
    "",
    // ------------------------------

    // Hitler hatalomra kerülése, náci hatalomátvétel
    // 1933
    // leiras:
    "",
    // ------------------------------

    // F. D. Roosevelt USA-elnöksége
    // 1933:1945
    // leiras:
    "",
    // ------------------------------

    // Berlin-Róma tengely
    // 1936
    // leiras:
    "",
    // ------------------------------

    // Anschluss
    // 1938
    // leiras:
    "",
    // ------------------------------

    // a müncheni konferencia
    // 1938
    // leiras:
    "",
    // ------------------------------

    // a II. világháború
    // 1939.9.1:1945.9.2
    // leiras:
    "",
    // ------------------------------

    // a II. vh kezdete
    // 1939.9.1
    // leiras:
    "",
    // ------------------------------

    // a II. vh vége
    // 1945.9.2
    // leiras:
    "",
    // ------------------------------

    // a szovjet-német megnemtámadási egyezmény (Molotov-Ribbentrop paktum)
    // 1939.8.23
    // leiras:
    "",
    // ------------------------------

    // Németország lerohanja Lengyelországot
    // 1939.9.1
    // leiras:
    "",
    // ------------------------------

    // angliai csata
    // 1940
    // leiras:
    "",
    // ------------------------------

    // Németország megtámadja a Szovjetúniót
    // 1941.6.22
    // leiras:
    "",
    // ------------------------------

    // Pearl Harbor japán bombázása, az USA belép a II. vh-ba
    // 1941.12.7
    // leiras:
    "",
    // ------------------------------

    // a Midway-szigeteknél lezajlott ütközet
    // 1941
    // leiras:
    "",
    // ------------------------------

    // az első el-alameini csata
    // 1941
    // leiras:
    "",
    // ------------------------------

    // a második el-alameini csata
    // 1942
    // leiras:
    "",
    // ------------------------------

    // a sztálingrádi csata vége
    // 1943.2
    // leiras:
    "",
    // ------------------------------

    // a kurszki csata
    // 1943
    // leiras:
    "",
    // ------------------------------

    // a normandiai partraszállás kezdete (D-nap)
    // 1944.6.6
    // leiras:
    "",
    // ------------------------------

    // atomtámadás Hirosima ellen
    // 1945.8.6
    // leiras:
    "",
    // ------------------------------

    // atomtámadás Nagaszaki ellen
    // 1945.8.9
    // leiras:
    "",
    // ------------------------------

    // Japán kapituláció/fegyverletétel
    // 1945.9.2
    // leiras:
    "",
    // ------------------------------

    // 5. B) Magyarország, világháborúk kora 1914-1915
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // az Osztrák-Magyar Monarchia hadat üzen Szerbiának
    // 1914.7.28
    // leiras:
    "",
    // ------------------------------

    // gorlicei csata
    // 1915
    // leiras:
    "",
    // ------------------------------

    // isonzói csaták
    // 1915:1917
    // leiras:
    "",
    // ------------------------------

    // az őszirózsás forradalom győzelme
    // 1918.10.31
    // leiras:
    "",
    // ------------------------------

    // a Magyarországi Tanácsköztársaság (proletárdiktatúra, Kun Béla)
    // 1919.3.21:1919.8.1
    // leiras:
    "",
    // ------------------------------

    // A Horthy-rendszer
    // 1920:1944
    // leiras:
    "",
    // ------------------------------

    // Horthy kormányzóvá választása
    // 1920.3
    // leiras:
    "",
    // ------------------------------

    // a trianoni békediktátum aláírása
    // 1920.6.4
    // leiras:
    "",
    // ------------------------------

    // a numerus clausus
    // 1920
    // leiras:
    "",
    // ------------------------------

    // földreform (Nagyatádi Szabó István)
    // 1920
    // leiras:
    "",
    // ------------------------------

    // Bethlen István miniszterelnöksége
    // 1921:1931
    // leiras:
    "",
    // ------------------------------

    // Klebelsberg Kuno vallás- és közoktatásügyi miniszter
    // 1922:1931
    // leiras:
    "",
    // ------------------------------

    // a pengő bevezetése
    // 1927
    // leiras:
    "",
    // ------------------------------

    // az első zsidótörvény
    // 1938
    // leiras:
    "",
    // ------------------------------

    // az első bécsi döntés
    // 1938
    // leiras:
    "",
    // ------------------------------

    // Kárpátalja visszacsatolása
    // 1939
    // leiras:
    "",
    // ------------------------------

    // a második zsidótörvény
    // 1939
    // leiras:
    "",
    // ------------------------------

    // a második bécsi döntés
    // 1940
    // leiras:
    "",
    // ------------------------------

    // a harmadik zsidótörvény
    // 1941
    // leiras:
    "",
    // ------------------------------

    // a magyar támadás Jugoszlávia/Szerbia ellen
    // 1941.4
    // leiras:
    "",
    // ------------------------------

    // Kassa bombázása
    // 1941.6.26
    // leiras:
    "",
    // ------------------------------

    // Magyarország deklarálja a hadiállapot beálltát a Szovjetúnióval
    // 1941.6.27
    // leiras:
    "",
    // ------------------------------

    // Magyarország belép a II. világháborúba
    // 1941.6
    // leiras:
    "",
    // ------------------------------

    // Kállay Miklós miniszterelnöksége
    // 1942:1944
    // leiras:
    "",
    // ------------------------------

    // magyar vereség a Don-kanyarnál, a doni katasztrófa
    // 1943.1
    // leiras:
    "",
    // ------------------------------

    // Magyarország német megszállása
    // 1944.3.19
    // leiras:
    "",
    // ------------------------------

    // Horthy sikertelen kiugrási kísérlete
    // 1944.10.15:1944.10.16
    // leiras:
    "",
    // ------------------------------

    // nyilas hatalomátvétel, Szálasi Ferenc
    // 1944.10.16
    // leiras:
    "",
    // ------------------------------

    // Szálasi-kormány
    // 1944.10.16:1945.3.28
    // leiras:
    "",
    // ------------------------------

    // Budapest ostroma
    // 1944.11:1945.2
    // leiras:
    "",
    // ------------------------------

    // Debrecenben összeül az Ideiglenes Nemzetgyűlés
    // 1944.12.21
    // leiras:
    "",
    // ------------------------------

    // Magyarország felszabadítása a náci uralom alól
    // 1945.4
    // leiras:
    "",
    // ------------------------------

    // a nyilas megszállás vége
    // 1945.4
    // leiras:
    "",
    // ------------------------------

    // a szovjet megszállás
    // 1945.4
    // leiras:
    "",
    // ------------------------------

    // 6. A) A hidegháború kora (Egyetemes történelem 1945-1991)
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // az ENSZ létrejötte
    // 1945
    // leiras:
    "",
    // ------------------------------

    // a Marshall-segély
    // 1947
    // leiras:
    "",
    // ------------------------------

    // a párizsi békék
    // 1947
    // leiras:
    "",
    // ------------------------------

    // India függetlensége
    // 1947
    // leiras:
    "",
    // ------------------------------

    // a hidegháború kezdete
    // 1947
    // leiras:
    "",
    // ------------------------------

    // Izrael állam megalapítása
    // 1948
    // leiras:
    "",
    // ------------------------------

    // ENSZ emberi jogok egyetemes nyilatkozata
    // 1948
    // leiras:
    "",
    // ------------------------------

    // az NSZK létrejötte
    // 1949
    // leiras:
    "",
    // ------------------------------

    // az NDK létrejötte
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a NATO létrejötte
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a KGST létrejötte
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a szovjetek is rendelkeznek atomfegyverrel
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a Kínai Népköztársaság létrejötte
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a koreai háború
    // 1950:1953
    // leiras:
    "",
    // ------------------------------

    // Sztálin halála
    // 1953
    // leiras:
    "",
    // ------------------------------

    // a Varsói Szerződés
    // 1955
    // leiras:
    "",
    // ------------------------------

    // a vietnami háború teljes ideje
    // 1955:1975
    // leiras:
    "",
    // ------------------------------

    // az SZKP XX. kongresszusa
    // 1956
    // leiras:
    "",
    // ------------------------------

    // a szuezi válság
    // 1956
    // leiras:
    "",
    // ------------------------------

    // a római szerződések
    // 1957
    // leiras:
    "",
    // ------------------------------

    // a berlini fal építése
    // 1961
    // leiras:
    "",
    // ------------------------------

    // az első ember a világűrben (Jurij Gagarin)
    // 1961
    // leiras:
    "",
    // ------------------------------

    // a kubai rakétaválság
    // 1962
    // leiras:
    "",
    // ------------------------------

    // a második vatikáni zsinat
    // 1962:1965
    // leiras:
    "",
    // ------------------------------

    // a vietnami háborúban az USA katonai beavatkozás ideje
    // 1964:1973
    // leiras:
    "",
    // ------------------------------

    // a prágai tavasz
    // 1968
    // leiras:
    "",
    // ------------------------------

    // a Brezsnyev-doktrína
    // 1968
    // leiras:
    "",
    // ------------------------------

    // párizsi (nyugati) diáklázadások
    // 1968
    // leiras:
    "",
    // ------------------------------

    // az első Holdra szállás
    // 1969
    // leiras:
    "",
    // ------------------------------

    // a helsinki értekezlet
    // 1975
    // leiras:
    "",
    // ------------------------------

    // a kelet-közép-európai rendszerváltások
    // 1989
    // leiras:
    "",
    // ------------------------------

    // a berlini fal lebontása
    // 1989
    // leiras:
    "",
    // ------------------------------

    // a Varsói Szerződés és a KGST felszámolása
    // 1991
    // leiras:
    "",
    // ------------------------------

    // az Öböl-háború kirobbanása
    // 1991
    // leiras:
    "",
    // ------------------------------

    // a Szovjetúnió felbomlása
    // 1991.12.26
    // leiras:
    "",
    // ------------------------------

    // a délszláv háború
    // 1991:1995
    // leiras:
    "",
    // ------------------------------

    // 6. B) A hidegháború kora (Magyar történelem 1945-1991)
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // magyarellenes atrocitások (Délvidék, Erdély, Csehszlovákia, Kárpátalja)
    // 1944:1945
    // leiras:
    "",
    // ------------------------------

    // szovjet megszállás
    // 1945
    // leiras:
    "",
    // ------------------------------

    // Nagy Imre-féle földreform (földosztás)
    // 1945
    // leiras:
    "",
    // ------------------------------

    // első nemzetgyűlési választások Magyarországon (a Szovjetúnió ideje alatt)
    // 1945
    // leiras:
    "",
    // ------------------------------

    // a második Magyar köztársaság kikiáltásának éve
    // 1946
    // leiras:
    "",
    // ------------------------------

    // az új forint bevezetése
    // 1946
    // leiras:
    "",
    // ------------------------------

    // szlovák-magyar lakosságcsere
    // 1946
    // leiras:
    "",
    // ------------------------------

    // a svábok kitelepítése Magyarországról
    // 1946
    // leiras:
    "",
    // ------------------------------

    // a párizsi béke
    // 1947.2.10
    // leiras:
    "",
    // ------------------------------

    // kékcédulás választások Magyarországon
    // 1947.8
    // leiras:
    "",
    // ------------------------------

    // a Magyar Dolgozók Pártjának (MDP) megalakulása
    // 1948
    // leiras:
    "",
    // ------------------------------

    // a nyílt kommunista diktatúra kezdete Magyarországon
    // 1948
    // leiras:
    "",
    // ------------------------------

    // az iskolák államosítása Magyarországon
    // 1948
    // leiras:
    "",
    // ------------------------------

    // a Rákosi-diktatúra
    // 1948:1956
    // leiras:
    "",
    // ------------------------------

    // a kommunista alkotmány Magyarországon
    // 1949
    // leiras:
    "",
    // ------------------------------

    // a Mindszenty- és a Rajk- per
    // 1949
    // leiras:
    "",
    // ------------------------------

    // az 56-os forradalom kirobbanásának dátuma
    // 1956.10.23
    // leiras:
    "",
    // ------------------------------

    // a Kossuth téri sortűz
    // 1956.10.23
    // leiras:
    "",
    // ------------------------------

    // szovjet támadás indul Magyarország ellen, a forradalom leverésének kezdete
    // 1956.11.4
    // leiras:
    "",
    // ------------------------------

    // a Kádár-rendszer
    // 1956:1989
    // leiras:
    "",
    // ------------------------------

    // Nagy Imre és vádlott társainak kivégzése
    // 1958
    // leiras:
    "",
    // ------------------------------

    // részleges amnesztia (az 56-os forradalom bebörtönözöttjeire vonatkozóan)
    // 1963
    // leiras:
    "",
    // ------------------------------

    // az új gazdasági mechanizmus bevezetése Magyarországon
    // 1968
    // leiras:
    "",
    // ------------------------------

    // az USA visszadja a Szent Koronát
    // 1978
    // leiras:
    "",
    // ------------------------------

    // a lakiteleki találkozó
    // 1987
    // leiras:
    "",
    // ------------------------------

    // a magyar rendszerváltoztatás
    // 1989:1990
    // leiras:
    "",
    // ------------------------------

    // Nagy Imre és mártírtársainak újratemetése
    // 1989.6.16
    // leiras:
    "",
    // ------------------------------

    // a harmadik Magyar Köztársaság kikiáltása
    // 1989.10.23
    // leiras:
    "",
    // ------------------------------

    // fekete március (marosvásárhelyi pogrom)
    // 1990
    // leiras:
    "",
    // ------------------------------

    // Antall József kormánya (MDF-FKGP)
    // 1990:1994
    // leiras:
    "",
    // ------------------------------

    // a szovjet csapatok kivonulása Magyarországról
    // 1991
    // leiras:
    "",
    // ------------------------------

    // 7.) Jelenkor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // a maastrichti szerződés aláírása (EU megalakulása)
    // 1992
    // leiras:
    "",
    // ------------------------------

    // a schengeni egyezmény életbe lépése
    // 1995
    // leiras:
    "",
    // ------------------------------

    // Magyarország belép a NATO-ba
    // 1999
    // leiras:
    "",
    // ------------------------------

    // a NATO bombázza Jugoszláviát/Szerbiát
    // 1999
    // leiras:
    "",
    // ------------------------------

    // terrortámadások az USA-ban (World Trade Center)
    // 2001.9.11
    // leiras:
    "",
    // ------------------------------

    // az euró bevezetése
    // 2002
    // leiras:
    "",
    // ------------------------------

    // Magyarország csatlakozása az EU-hoz (és kilenc másik tagállamé)
    // 2004
    // leiras:
    "",
    // ------------------------------

    // törvény a nemzeti összetartozásról
    // 2010
    // leiras:
    "",
    // ------------------------------

    // Fidesz-KDNP és Orbán Viktor kormányainak kezdetének éve
    // 2010
    // leiras:
    "",
    // ------------------------------

    // Magyarország Alaptörvényének bevezetése (jelenkor)
    // 2012
    // leiras:
    "",
    // ------------------------------

]
