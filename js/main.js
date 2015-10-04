$(document).ready(function() {

    $('#noemain').fadeIn(1000);
    $('#main').delay(500).fadeIn(1000);
    $('#areas').delay(1000).fadeIn(1000);


    $('.bs-icons li').mouseenter(function() {
        $(this).fadeTo("fast", 1);
    });
    $('.bs-icons li').mouseleave(function() {
        $(this).fadeTo("slow", 0.2);
    });
});