$(document).ready(function() {
   
    
    $('#example').popover();
   
    $(".pop1").hover(function(){
        $(".popup1").toggleClass("hidden");
    });
    
    $(".pop2").hover(function(){
        $(".popup2").toggleClass("hidden");
    });
    
    $(".pop3").hover(function(){
        $(".popup3").toggleClass("hidden");
    });
    
    
    $("a[href*='#']").mPageScroll2id();
    
    
    $(".slogan h1, .slogan p, .ser-1").animated("fadeInDown", "fadeOutUp");
    $(".ser-2").animated("fadeInUp", "fadeOutDown");
    $(".presents, .vigoda, .ot-1").animated("fadeInLeft", "fadeOutRight");
    $(".stoimost, .ot-2").animated("fadeInRight", "fadeOutLeft");
    $(".okno img").animated("zoomin", "zoomOut");
    
});
	


