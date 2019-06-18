$(document).ready(function(){
   
   $('.bg h1').click(function(){
      $('.bg').fadeOut(); 
      $('.home .nav').fadeIn();
   });
    



   $('.work li.no-desktop').click(function(){
      $('.work li.no-desktop').removeClass('hide');
      $(this).addClass('hide');
   });
});

    
    
var $tooltip = $('.tooltip');    

$(document).on('mousemove', function(e){
    $tooltip.css({
       left:  e.pageX + 10,
       top:   e.pageY + 10
    });
});    


$('.work a').on('mouseenter', function(){ 
   
   var title = $(this).attr('data-title');
   $tooltip.text(title);

});
$('.work a').on('mouseleave', function(){ 
   
   $tooltip.text('');
   
});




