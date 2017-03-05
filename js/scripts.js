(function ($){
    $('li').click(function(){
        $(this).toggleClass('visiblenone');
        $(this).parent().parent().parent().toggleClass('block-question--spryatant');
        $("#my").toggleClass('block-content--spryatant');
    });
})(jQuery);

 