$(document).ready(function(){

    //var windowHeight = $(window).height();
    //console.log(windowHeight);

    var windowWidth = $(window).width();

	var $likeConseil = $('#container .content .conseil ul').find('li');

	$likeConseil.click(function(){
		$(this).find("i").toggleClass("active");
	});

    //Nav iphone
    $('a.nav').click(function(){
        $('nav').css({"display":"block"}).focus();
        return false;
    });

    //Nav iphone sous-menu
    $('a.nav-sous-menu').click(function(){
        $('footer section ul').css({"display":"block"}).focus();
        return false;
    });

    // TOOLTIPS
    var
    $tooltip = $('#wrapper .personne-presentation figure'),
    $tooltipContent = $tooltip.next();

    //les contenus du tooltips sont masqués sauf le premier
    $tooltipContent.hide();


    //au clique sur un titre
    $tooltip.click(function(){
        console.log('click');
        //si il est ouvert
        if ($(this).next().is(':visible')) {
            //il se ferme
            $(this).next().slideUp();
        }

        //sinon il est fermé
        else {
            //masquer les textes affichés
            $tooltipContent.slideUp();
            //afficher ou masquer le texte lié
            $(this).next().slideDown();
        }

    });

    if($(window).width() < 480){
        // Scroll Top
        $("#IDdubouton").scrollToTop({
            speed:1800,
            ease:"easeOutCubic",
            start:250
        });
    }
    
});




