// Trigger
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});
$(".gnb a").click(function () {
  $(".gnb, .trigger").removeClass("active");
});


//wow.js
let wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       150,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
wow.init();
