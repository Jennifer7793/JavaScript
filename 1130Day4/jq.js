$(function() {
  $('.jcarousel').jcarousel({
  });

  $('.jcarousel').jcarousel('scroll', '+=2');

  var instance = $('.jcarousel').data('jcarousel');

  instance.scroll('+=2');

  $('.jcarousel').jcarousel('scroll', btn);

  $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function() {
      $('.jcarousel').jcarousel('scroll', '+=1');
  });
});

// $().ready(() => {
//   $(".hello").on("click", () => {
//     console.log(123);
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const press = document.querySelector(".hello");
//    press.addEventListener ("click", (e) => {
//     console.log(123);
//   })
// });

