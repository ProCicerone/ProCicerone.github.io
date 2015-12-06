$(document).ready(function(){
    $('#foot-wrapper').hide();
    $('.foot-number').html('*')
    $('.foot-number').data('isOpen', '')
    $('.foot-number').click(function() {
        if (! $(this).data('isOpen')) {
            $(this).data('isOpen', 'yes');
            $(this).after('<div class="foot-text">' + $('#foot-wrapper').find('#ft-' + $(this).attr('id').substr(3)).html() + '</div>');
        } else {
            $(this).data('isOpen', '');
            // $('.foot-text').remove();
            $(this).next().remove();
        }
    });
});
