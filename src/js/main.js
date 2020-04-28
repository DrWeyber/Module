$(".menu-opener").click(function() {
    $('.burger-menu').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".center-header .container").length) {
        $('.burger-menu').hide();
    }
    e.stopPropagation();
});

$(document).ready(function(){
    $('.promo-slider').slick({
        dots:true,
        arrows: true,
        autoplay:false
    });
});



