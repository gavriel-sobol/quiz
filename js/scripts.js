 $(document).ready(function(){
    $('li').click(function(e){
       var div__id=document.getElementById($(this).data('id'));
        $(this).toggleClass('visiblenone');
        $(this).parent().parent().parent().toggleClass('block-question--spryatant');
        $(div__id).toggleClass('block-content--spryatant');
    });
    
    $('.block-content').click(function(e){
         $('.block-question').toggleClass('block-question--spryatant');
         $(this).toggleClass('block-content--spryatant');
    });

})
(jQuery);

 
