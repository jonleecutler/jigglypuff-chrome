
$(function(){
    $('.loader').hide();
    $('#confirm-btn').hide();
    $('#yes-button').on('click', function () {
        $('#yes-button').hide();
        $('.loader').show();
        $(".loader").delay(5000).hide(0);
        //$('#confirm-btn').show();
        console.log('Waiting for Authorization...');
    });

});


