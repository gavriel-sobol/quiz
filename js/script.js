(function($){
    var link = $('.nav__item'),
        slideItem = $('.slide__item');
        activeClass= 'active';

        link.on('click', activateSlide);

        function activateSlide(e) {
            e.preventDefault();
            var index = $(this).index();

            slideItem.parent().find('.slide__item' + '.' + activeClass).removeClass(activeClass);
            slideItem.eq(index).addClass(activeClass);
        }
})(jQuery);