$(document).ready(function(){
    // CLIQUEZ SUR LE BOUTON FAIT APPARAITRE UN POPUP AVEC EN TEXT LA TAILLE DE LA FENETRE
    $('.bitton').click(function() {
                window.open("popup.html","blank","width=800,height=600");
                
            });
    $('.popup_title').html($(window).width());

    // CLIQUEZ SUR LE DIV EN COULEUR POUR LES FAIRE DISPARAITRE
    $('.txt_p').click(function(){
        $(this).hide();
    });
    // CLIQUEZ SUR LE BOUTON POUR FAIRE REAPARAITRE LES DIV AVEC DU TEXT
    $('.return_p').click(function(){
        $('.txt_p').show();
    });
    
    $('.disparition_p').click(function(){
        if ($('.txt_p').is(":visible")) {
            $('.txt_p').hide(); 
        }
        else {
            $('.popup_urss').slideDown(5000);
            $('.urss_song')[0].play();
        }
        
    });
    // LE BOUTON DU POPUP FERME LE FENETRE POPUP
    $('.close_popup').click(function(){
        window.close();
    });


    $('.popup_p').click(function(){
        $(`.popup_man`).fadeIn(500);


    });
    $('.fermeture_popup').click(function(){
        $(`.popup_man`).fadeOut(500);
    });

    $('.toggle_p').click(function(){
        $('.txt_p').toggleClass('animation');
    });
    

});
