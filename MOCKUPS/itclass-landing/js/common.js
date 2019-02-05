
$(document).ready(function() {
	$('.toggle-button').sidr({
        speed: '3000',
    });
    
   
    
   $('.left-nav ul li a').sidr();
    $("a[href*='#']").mPageScroll2id({
        offset: 50,
        speed:100
    });

 
 
    $("#r1").change(function(){
        $(".portfolio-unit1").removeClass("hidden");
        $(".portfolio-unit2").addClass("hidden");
    });
    
    $("#r2").change(function(){
        $(".portfolio-unit2").removeClass("hidden");
        $(".portfolio-unit1").addClass("hidden");
    });
    
   
    
   
   
        $(".galer").colorbox({inline:true, width:"470px", height: "550px", rel:'gal', scrolling: 'true'});
        $(".gal2").colorbox({inline:true, width:"470px", height: "550px", rel:'gal2', scrolling: 'true'});
        $(".galer2").colorbox({inline:true, width:"470px", height: "550px", rel:'galer2', scrolling: 'true'});
        $(".gal22").colorbox({inline:true, width:"470px", height: "550px", rel:'gal22', scrolling: 'true'});
   
    
    
    
    var navLi = $(".top-nav .main-nav li");
    $(".tracked").waypoint( function(){
       var hash = $(this).attr('id');
        navLi.removeClass('active');
        $.each(navLi, function(){
            if ( $(this).children('a').attr('href').slice(1) == hash){
                $(this).addClass('active');
            }
        });
    }, {offset: '15%'});
    
    $('#main-header').waypoint(function(){
        navLi.removeClass('active');
        $(".tr2").addClass("active");
    }, {offset: '-15%'});
    
});