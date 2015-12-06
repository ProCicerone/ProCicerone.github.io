$(document).ready(function(){
    $('#burger').data('isClosed', 'no');
    $('#burger').click(function() {
        if (($(this).data('isClosed'))) { // open
            $('body').addClass('noscroll');
            $('#trigger-wrapper').addClass('open');
            $(this).data('isClosed', '');
        } else { // close
            $('body').removeClass('noscroll');
            $('#trigger-wrapper').removeClass('open');
            $(this).data('isClosed', 'no');
        }
    });
});
