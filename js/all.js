$(document).ready(function () {
   //加入最愛
   $('.favorite').click(function(event){
    event.preventDefault();
    $(this).toggleClass('fas');
    $(this).toggleClass('far');
    });
});
 
 
