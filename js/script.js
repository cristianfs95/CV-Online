
// Change class from menu to the X.
// Show & Hide .ul-menu

$('#cbox').click(function(){
    $('#menu-btn')
    .toggleClass('menu')
    .toggleClass('close');


    $('.ul-menu-hide').slideToggle();
});

$('.menu-anchor').click(function(){
    $('.ul-menu-hide').slideToggle('slow');
    $('#menu-btn').removeClass('close');
    $('#menu-btn').addClass('menu');

});
