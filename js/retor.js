function prendiClasse(selettore) {
    return selettore.attr('class').split(' ')[1];
}
function cleanUp() {
    $('[class*="highlight"]').removeClass(function(i, c) {
        return c.match(/highlight-.*/g).join(" ");
    }) 
    $('span.vectorNumber').remove();
}
$(document).ready(function(){
    $('.trigger').click(function (){
            if ($(this).hasClass('clicked')) {
                cleanUp();
                $(this).removeClass('clicked');
            } else {
                cleanUp();
                $('.trigger').removeClass('clicked');
                $('.target.' + prendiClasse($(this))).addClass('highlight' + '-' + prendiClasse($(this)));
                $(this).addClass('clicked');
                if ($('.target.' + prendiClasse($(this))).hasClass('vector')) {
                    $('.target.' + prendiClasse($(this))).each(function(index){
                        $(this).append('<span class="vectorNumber">' + $(this).attr('id').substr(3) + '</span>');
                    });
                }
            }
    });
});
