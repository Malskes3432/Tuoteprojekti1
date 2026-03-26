## Projektin tilannekatsaus

**Yleistä**
* Layout uudelleenrakennettu gridiin. Grid optimoituu paremmin kuin flexbox, jota aiemmassa versiossa oli käytetty ainakin osittain.
* Jokaiselle sivulle voi nyt asettaa oman hero-otsikkokuvan. Kuvat säilötään graphics-kansiossa, koska ne ovat muuttumatonta sisältöä ja ne on nimetty asianmukaisesti.
* *Graphics*-kansiossa on myös muut muuttumattomat sisällöt, kuten logot ja pienkuvakkeet valikoita ja painikkeita varten.
* Sisältökuvat ovat *images*-kansiossa. Nämä kuvat ovat siis niitä, joita laitetaan tekstin sekaan tai esim. galleriaan. 
* Lisätty luettavuutta aria-merkinnöillä ja osin yksinkertaistetulla sisältörakenteella.
* Hakukoneoptimoinnit paikallaan. 
* Kaikki kuvat on pakattu webp-kuviksi: vähentää kuormaa ja parantaa performancea.
* Kuvien latautumista optimoitu: prioriteettina aina hero-kuva. Muihin kuviin laitettu loading=lazy, eli kuvat latautuvat sivulle vasta kun niiden kuuluu tulla näkyviin esim. alaspäin selatessa. Galleriasivun performance ymmärrettävästi on matalampi kuin muiden sivujen suuren kuvakuorman vuoksi.
* Lisätty javascript-tiedostot, joista *main.js* sisältää hampurilaisvalikon (mobiilinavigaatio) muotoilut ja *back to top*-painikkeen ominaisuudet. Lisäksi *lightbox.js* jossa gallerian kuvakatseluominaisuuden.

**Universaalit muuttujat (variables), jotta muotoilu on siistiä, helppoa ja yhteneväistä**
* asetettu välistykset var(--space-s) jne, 4 eri kokoa s-xl käytettävissä. Vähentää kikkailuja paddingin tai marginin kanssa.
* värikoodit var(--color-bg-light) jne: vain näihin muutetaan värikoodeja, ei mihinkään muualle!
* pyöristykset (radius): kuvien tai buttoneiden pyöristetyt kulmat ovat aina samanlaisia. koot s-m ja pillerimuoto.
* varjot (shadows): oletusvarjo sekä tarvittaessa tummempi, kun varjostetun osan päälle menee hiirellä
* ease eli jonkin tapahtuman nopeus / muutoksen pehmeys
* Fontit yleissisältöön (font-text) ja otsikointiin (font-header): Näihin laitetaan valitut fontit, mihinkään muuhun ei tarvitse enää koskea. Fontit tuodaan sivuille css-tiedoston kautta @import-käskyllä.

**Sisältöosien taustavärit**
* Kun luodaan sisältöosia, osa (section) on helppo eritellä .bg-light tai .bg-medium -luokalla (paras esimerkki tapahtumat-sivu). Nämä noudattavat värikoodien variableja color-bg-light ja color-bg-medium.
* Lisäksi on myös bg-dark, joka on tarkoitettu footerille tai johonkin *erittäin* tärkeään korostamiseen (jos sellaista tarvittaisi kesken sisällön)

**Sisältö**
* Lisätty tekstisisältöä useille sivuille.
* Gallerian ulkoasu mobiiliystävällisempi.
* Kuvat tekstin yhteyteen asetetaan figure-elementeillä. 

## Mitä seuraavaksi
* Olga tekee tyyliohjeen ja päivittää värit ja fontit sen mukaisesti variableihin. Jos valitset primary-väriksi jotain muuta kuin sinisen, vaihdetaan se sitten myös logoon (ei iso homma). 
* Galleriassa voisi olla työpöytänäkymässä jopa 4 kuvaa vierekkäin. Mobiilissa max. 3, ettei tule liian tiivis. 
* Jäsenten arvioinnit voisi sopia paremmin jäsenyys-sivulle "mainokseksi", tai sinne voisi luoda muutaman lisää.

