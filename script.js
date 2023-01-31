var s = skrollr.init() 

$(document).on('click','a.item',function(evt){
  var target = $(this).attr("href")
  var scrollTop = 
    document.documentElement.scrollTop;
    window.pageYOffset;
    document.body.scrollTop;
  $('html,body').animate({
    scrollTop: $(target).offset().top - 30
  },500)
})





$(".eximg").click(function() {
  $("#img").fadeIn("speed")
 
});

$(".btnx").click(function() {
  closeWindow();
});
function closeWindow(){
  $("#img").fadeOut(200);
  $(".dialouge").removeClass("transform-in").addClass("transform-out");
  event.preventDefault();
}


$(document).ready(function(){
  $('.showmenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})

$(document).ready(function(){
  $('.item').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})


$(".eximg").click(function() {
  $("#img").fadeIn("speed")
 
});

$(".popup-close").click(function() {
  closeWindow();
});
function closeWindow(){
  $("#img").fadeOut(200);
  $("#text").fadeOut(200);
  $(".dialouge").removeClass("transform-in").addClass("transform-out");
  $(".box").removeClass("transform-in").addClass("transform-out");
  event.preventDefault();
}




$("#winner").click(function() {
  $("#text").fadeIn("speed")
 
});





function debounce(func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args)
    }, delay);
  }
}
