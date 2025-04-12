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
    "",
    // ------------------------------

    // Kleiszthenész reformjai
    // -508
    // leiras:
    "",
    // ------------------------------

    // Athén fénykora
    // -5sz
    // leiras:
    "",
    // ------------------------------

    // Periklész kora
    // -461:-429
    // leiras:
    "",
    // ------------------------------

    // a marathóni csata
    // -490
    // leiras:
    "",
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
    "",
    // ------------------------------

    // Domitianus-féle keresztényüldözés
    // 94
    // leiras:
    "",
    // ------------------------------

    // a milánói ediktum
    // 313
    // leiras:
    "",
    // ------------------------------

    // a niceai zsinat
    // 325
    // leiras:
    "",
    // ------------------------------

    // a Római Birodalom felosztása
    // 395
    // leiras:
    "",
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
    "",
    // ------------------------------

    // a középkor vége
    // 1492
    // leiras:
    "",
    // ------------------------------

    // a középkor
    // 476:1492
    // leiras:
    "",
    // ------------------------------

    // Bencés rend alapítása - Szent Benedek, Monte Cassino
    // 529
    // leiras:
    "",
    // ------------------------------

    // Mohamed futása, a muszlim időszámítás kezdete
    // 622
    // leiras:
    "",
    // ------------------------------

    // a frankok győzelme az arabok felett - Poitiers
    // 732
    // leiras:
    "",
    // ------------------------------

    // Nagy Károly császárrá koronázása
    // 800
    // leiras:
    "",
    // ------------------------------

    // a verduni szerződés
    // 843
    // leiras:
    "",
    // ------------------------------

    // az egyházszakadás
    // 1054
    // leiras:
    "",
    // ------------------------------

    // Bolognai egyetem alapítása
    // 1088
    // leiras:
    "",
    // ------------------------------

    // A ferences rend alapítása - Szent Ferenc, Assisi
    // 1209
    // leiras:
    "",
    // ------------------------------

    // a Magna Charta kiadása
    // 1215
    // leiras:
    "",
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
    "",
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
    "",
    // ------------------------------

    // az augsburgi csata
    // 955
    // leiras:
    "",
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
    "",
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
    "",
    // ------------------------------

    // IV. Béla uralkodása
    // 1235:1270
    // leiras:
    "",
    // ------------------------------

    // a tatárjárás
    // 1241:1242
    // leiras:
    "",
    // ------------------------------

    // az Árpád-ház kihalása
    // 1301
    // leiras:
    "",
    // ------------------------------

    // I. Károly (Róbert) uralkodása
    // 1308:1342
    // leiras:
    "",
    // ------------------------------

    // a visegrádi királytalálkozó
    // 1335
    // leiras:
    "",
    // ------------------------------

    // I. (Nagy) Lajos törvényei
    // 1351
    // leiras:
    "",
    // ------------------------------

    // Luxemburgi Zsigmond uralkodása
    // 1387:1437
    // leiras:
    "",
    // ------------------------------

    // a nikápolyi csata
    // 1396
    // leiras:
    "",
    // ------------------------------

    // Hunyadi János hosszú hadjárat
    // 1443:1444
    // leiras:
    "",
    // ------------------------------

    // a várnai csata
    // 1444
    // leiras:
    "",
    // ------------------------------

    // a nándorfehérvári diadal
    // 1456
    // leiras:
    "",
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
    "",
    // ------------------------------

    // A reformáció kezdete - Luther Márton
    // 1517
    // leiras:
    "",
    // ------------------------------

    // Augsburgi vallásbéke
    // 1555
    // leiras:
    "",
    // ------------------------------

    // Hernán Cortés meghódítja Mexikót
    // 1518
    // leiras:
    "",
    // ------------------------------

    // Tridenti zsinat
    // 1545:1563
    // leiras:
    "",
    // ------------------------------

    // a harmincéves háború
    // 1618:1648
    // leiras:
    "",
    // ------------------------------

    // a vesztfáliai békék
    // 1648
    // leiras:
    "",
    // ------------------------------

    // XIV. Lajos uralkodása
    // 1643:1715
    // leiras:
    "",
    // ------------------------------

    // az angol Jognyilatkozat kiadása
    // 1689
    // leiras:
    "",
    // ------------------------------

    // spanyol örökösödési háború
    // 1701:1714
    // leiras:
    "",
    // ------------------------------

    // Perzsa levelek - Montesquieu
    // 1721
    // leiras:
    "",
    // ------------------------------

    // francia Enciklopédia kiadása, 35 kötetben
    // 1751:1780
    // leiras:
    "",
    // ------------------------------

    // osztrák örökösödési háború
    // 1740:1748
    // leiras:
    "",
    // ------------------------------

    // a hétéves háború
    // 1756:1763
    // leiras:
    "",
    // ------------------------------

    // James Watt gőzgép
    // 1769
    // leiras:
    "",
    // ------------------------------

    // az amerikai Függetlenségi nyilatkozat kiadása, az USA létrejötte
    // 1776.7.4
    // leiras:
    "",
    // ------------------------------

    // USA alkotmány
    // 1787
    // leiras:
    "",
    // ------------------------------

    // 3. B) Magyar koraújkor
    // SEPARATOR
    // leiras:
    "",
    // ------------------------------

    // mohácsi csatavesztés, kettős királyválasztás
    // 1526
    // leiras:
    "",
    // ------------------------------

    // Buda török elfoglalása, az ország tényleges három részre szakadása
    // 1541
    // leiras:
    "",
    // ------------------------------

    // a nagy várháborúk éve, Eger védelme
    // 1552
    // leiras:
    "",
    // ------------------------------

    // Szigetvár eleste
    // 1566
    // leiras:
    "",
    // ------------------------------

    // Drinápolyi béke
    // 1568
    // leiras:
    "",
    // ------------------------------

    // Tordai határozat - vallásbéke
    // 1568
    // leiras:
    "",
    // ------------------------------

    // Speyeri szerződés, Erdélyi Fejedelemség
    // 1570
    // leiras:
    "",
    // ------------------------------

    // Vizsolyi Biblia - Károli Gáspár
    // 1590
    // leiras:
    "",
    // ------------------------------

    // a tizenöt éves háború
    // 1591:1606
    // leiras:
    "",
    // ------------------------------

    // Tata visszafoglalása, patara
    // 1597
    // leiras:
    "",
    // ------------------------------

    // Bocskai István szabadságharca
    // 1604:1606
    // leiras:
    "",
    // ------------------------------

    // Bethlen Gábor erdélyi fejedelem
    // 1613:1629
    // leiras:
    "",
    // ------------------------------

    // Pázmány Péter esztergomi érsek
    // 1616:1637
    // leiras:
    "",
    // ------------------------------

    // Zrínyi Miklós téli hadjárata, a vasvári béke
    // 1664
    // leiras:
    "",
    // ------------------------------

    // Bécs török ostroma
    // 1683
    // leiras:
    "",
    // ------------------------------

    // Buda visszafoglalása
    // 1686
    // leiras:
    "",
    // ------------------------------

    // a karlócai béke, a török kiűzése
    // 1699
    // leiras:
    "",
    // ------------------------------

    // a Rákóczi-szabadságharc
    // 1703:1711
    // leiras:
    "",
    // ------------------------------

    // az ónódi országgyűlés
    // 1707
    // leiras:
    "",
    // ------------------------------

    // a szatmári béke
    // 1711
    // leiras:
    "",
    // ------------------------------

    // Pragmatica Sanctio elfogadása a magyar országgyűlésen
    // 1723
    // leiras:
    "",
    // ------------------------------

    // Tata az Esterházyak birtoka lett
    // 1727
    // leiras:
    "",
    // ------------------------------

    // Mária Terézia uralkodása
    // 1740:1780
    // leiras:
    "",
    // ------------------------------

    // Úrbéri rendelet
    // 1767
    // leiras:
    "",
    // ------------------------------

    // Ratio Educationis
    // 1777
    // leiras:
    "",
    // ------------------------------

    // II. József (kalapos király) uralkodása
    // 1780:1790
    // leiras:
    "",
    // ------------------------------

    // Türelmi rendelet
    // 1781
    // leiras:
    "",
    // ------------------------------

    // Magyarországi népszámlálás
    // 1784
    // leiras:
    "",
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
