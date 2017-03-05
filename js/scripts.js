(function($){
    $('td').click(function(){
        $(this).children('.visiblenone').toggleClass('visible');
        $(this).children('i').toggleClass("rotate90");
        return false;
    });
})(jQuery);