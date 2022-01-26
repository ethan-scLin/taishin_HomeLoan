$(function () {
  // header與我聯繫
  $("#header .call-btn-wrap").mouseenter(function () {
    if (window.innerWidth >= 1280) {
      $(this).addClass("hover");
    }
  });
  $("#header .call-btn-wrap").mouseleave(function () {
    if (window.innerWidth >= 1280) {
      $(this).removeClass("hover");
    }
  });
  $("#header .call-btn-wrap").click(function () {
    if (window.innerWidth < 1280) {
      $(this).toggleClass("hover");
    }
  });
  $(window).scroll(function () {
    if (window.innerWidth < 1280) {
      $("#header .call-btn-wrap").removeClass("hover");
    }
  });

  $(".type-btn").click(function () {
    var $index = $(this).index();
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".articles-wrap").removeClass("show");
    $(".articles-wrap").eq($index).addClass("show");
  });

  $("#type-select").change(function () {
    var $index = $(this).val();
    $(".type-btn").eq($index).click();
  });

  var kvtl = gsap.timeline();
  kvtl
    .from("#kv", { opacity: 0, yPercent: -30 })
    .from("#kv h2", { opacity: 0 })
    .from("#kv .deco-man", { opacity: 0 });
});
