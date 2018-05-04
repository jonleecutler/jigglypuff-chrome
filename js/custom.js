
$(function(){
    $('.loader').hide();
    $("#wait-text").hide();
    $('#confirm-button').hide();
    $('#yes-button').on('click', function () {
        $('#yes-button').hide();
        $('#confirm-button').hide();
        $('.loader').show();
        $(".loader").delay(5000).hide(0);
        $('#wait-text').show();
        $("#wait-text").delay(5000).hide(0);
        console.log('Waiting for Authorization...');
        $("#intro-text").hide();
        $('#confirm-button').delay(5000).show(0);
    });
    //$('#confirm-button').show();

});


