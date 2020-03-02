// SCOPO DEL GIOCO AUTOPLAY:
// Sulla base di quanto visto a lezione.
// Timing Functions: Usiamo una delle due o entrambe per gestire l’autoplay ---->
// 1 riga di codice. Poi però da qui cercate di immaginare voi qualche scenario possibile nel quale il vostro slideshow
// vi piacerebbe si comportasse in un certo modo. Vi faccio qualche esempio:
// bloccare la ripetizione dopo qualche decina di secondi
// blocco al mouseenter ---- sblocco al mouseleave
// Tasto Pausa ---- Tasto Play
// Insomma divertitevi un po’ a giocarci e a indagare.
// BONUS: Gestire il click su un pallino che mi sposta alla slide corrispondente.


$(document).ready(function() {



    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva


    // Definisco le funzioni nextImage e prevImage
    function nextSlide() { // nominiamo uno funzione PARLANTE nextSlide
        if ( $('.images img.active').hasClass('last') ) { // se nella la classe ACTIVE è presente la classe LAST

            $('.images img.active').removeClass('active'); //allora togli ACTIVE dalla classe ACTIVE
            $('.images img.first').addClass('active'); // e aggiungo la classe ACTIVE nella classe FIST (esempio ultima IMG prima del nuovo ciclo)

            // Pallini
            $('.slider-nav i.active').removeClass('active'); // Rif pall, caso fine ciclo con IF, se arriva a fine ciclo, togli ACTIVE da pallino attivo
            $('.slider-nav i.first').addClass('active'); // inserisci ACTIVE alla classe FIRST (primo pallino)

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active dall'immagine in visione (active)
            var prossimaImg = $('.images img.active').next(); // inserisco l'ACTIVE nell'imamgine successiva (NEXT)

            imgAttiva.removeClass('active'); // uso SHORTCUT impostate precedentemente
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active dal Pall attivo
            var prossimaPallino = $('.slider-nav i.active').next(); // sposto il Pall active a quello successivo

            pallinoAttivo.removeClass('active'); // Shortcut Precedentemente assegnati
            prossimaPallino.addClass('active');
        }
    }

    $('.prev').click(backSlide); // associo il click al tasto "back"

    function backSlide() { // creo funzione backSLide
        if ( $('.images img.active').hasClass('first') ) { // inizio ciclo con IF / se IMG attiva è la prima

            $('.images img.active').removeClass('active'); // tolgo IMG all'IMG attiva
            $('.images img.last').addClass('active'); // la inserisco all'ultima (BACK)

            // Pallini
            $('.slider-nav i.active').removeClass('active'); // tolgo il Pall all'ultimo ACTIVE
            $('.slider-nav i.last').addClass('active'); // lo faccio ripartire dall'ultimo (LAST)

        } else { // sequenza con ELSE
            var imgAttiva = $('.images img.active'); // Rimuovo l'active dall'IMG attiva
            var precedenteImg = $('.images img.active').prev(); // inserisco active all'IMG precedente (BACK)

            imgAttiva.removeClass('active'); // Shortcut
            precedenteImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active dal pallino ACTIVE
            var precedentePallino = $('.slider-nav i.active').prev(); // aggiungo l'active al precendete Pall

            pallinoAttivo.removeClass('active'); // shortcut assegnati precedentemente
            precedentePallino.addClass('active');
        }
    }



    $('.fa-infinity').click(function(){
        setInterval(function(){ nextSlide(); }, 1000);
    })

    $('.fa-pause').click(function(){
        clearInterval(function(){ stopCycle();});
    })


});
