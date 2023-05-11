$(document).ready(function(){
   $('img').click(function(){
      $(this).after("<div class='big-img'></div>");
      var imgSrc = $(this).attr('src');
      $(".big-img").css("background-image", "url(" + imgSrc + ")");
      $('.big-img').fadeIn("fast");

      $('.big-img').click(function(){
         $('.big-img').fadeOut("fast");
         $('.big-img').remove();
      });
   });
});

