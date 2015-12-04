$(document).ready(function(){
    $('#burger').data('isClosed', '');
    $('#burger').click(function() {
        if (!($(this).data('isClosed'))) {
            $('#trigger-wrapper').animate({right: '25%'}, 500);
            $(this).data('isClosed', 'yes');
        } else {
            $('#trigger-wrapper').animate({right: '-200px'}, 500);
            $(this).data('isClosed', '');
        }
    });
});
