$(document).ready(function(){
$(function(){
    $('.loader').hide();
    $("#wait-text").hide();
    $('#confirm-button').hide();
    $('#yes-button').on('click', function () {
        $('#yes-button').hide();
        $('#confirm-button').hide();
        $('.loader').show();
        $(".loader").delay(3000).hide(0);
        $('#wait-text').show();
        $("#wait-text").delay(3000).hide(0);
        console.log('Waiting for Authorization...');
        $("#intro-text").hide();
        $('#confirm-button').delay(3000).show(0);
    });
    //$('#confirm-button').show();
    var node = document.getElementsByName('cardNumber');
    node[0].value = '4100 0000 3456 8901';
});

});
