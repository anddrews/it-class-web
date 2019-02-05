$(document).ready(function() {
    
    $(".toyr-in-gruz").animated("fadeInDown", "fadeOutUp");
    $(".kurort").animated("fadeInDown", "fadeOutUp");
    $(".gal-item").animated("fadeInLeft", "fadeOutLeft");
    $(".arrow").animated("bounce", "bounce");

	function heightDetect(){
        $(".main-header").css("height", $(window).height());
    };
    
     heightDetect();                                  
	$(window).resize(function(){
            heightDetect();
        });
    

    
    $(".consult-btn").focusin(function() {
    $(".consult-btn").css("background","#f4d86c");
    $(".consult-btn").css("color","#8C7310");
    });
    
    $(".consult-btn").focusout(function() {
    $(".consult-btn").css("background","#f4d86c");
    $(".consult-btn").css("color","#8C7310");
    });
	
    $(".navbar-toggle").click(function(){
        $(".arrow").toggleClass("hide");
    });
    
    $("a[href*='#']").mPageScroll2id();
    
    
});
	


$(window).load(function() {
$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
	

});
