$(function () {
  // cookies使用確認
  $(function () {
    $(".cookies-popup .btn-cookie-confirm").click(function () {
      $(".cookies-popup").hide();
    });
  });

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

  // kv slider
  $("#kv-slider").slick({
    dots: true,
    arrows: false,
    slidersToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // sec2 路線圖
  $("#sec2-main .btn").click(function () {
    $("#sec2-main .deco-img").fadeOut();
    $("#sec2-main .btn").addClass("moved");
    $("#sec2-main .btn").not(this).removeClass("selected");
    $(this).addClass("selected");
    $("#route-img").removeClass("route1 route2 route3");
    var $index = $(this).index("#sec2-main .btn");
    $("#route-img").addClass("route" + $index);
    $("#sec2-main .map-link").addClass("enabled").removeClass("selected");
    switch ($index) {
      case 0:
        $("#sec2-main .map-link").eq(0).addClass("selected");
        break;
      case 1:
        $("#sec2-main .map-link").eq(1).addClass("selected");
        $("#sec2-main .map-link").eq(2).addClass("selected");
        $("#sec2-main .map-link").eq(3).addClass("selected");
        break;
      case 2:
        $("#sec2-main .map-link").eq(4).addClass("selected");
        break;
    }
    if (window.innerWidth <= 768) {
      $(".mobile-tags").addClass("enabled");
      $(".mobile-tags .tag").removeClass("selected");
      $(".mobile-tags .tag").eq($index).addClass("selected");
    }
  });
  $(".mobile-tags .tag").click(function () {
    var $tagIndex = $(this).index();
    $("#sec2-main .btn").eq($tagIndex).click();
  });

  // sec4 文章列表slider
  $("#sec4-slider").slick({
    dots: false,
    slidersToShow: 1,
    prevArrow: $("#sec4-prev-btn"),
    nextArrow: $("#sec4-next-btn"),
    infinite: false,
  });

  // sec5 tag切換
  $("#sec5-select").change(function () {
    var $index = $(this).val();
    $("#section5 .tag").eq($index).click();
  });
  $("#section5 .tag").click(function () {
    $("#section5 .tag").not(this).removeClass("selected");
    $(this).addClass("selected");
    var $index = $(this).index();
    $("#section5 .ans-list-wrap ul").removeClass("show");
    $("#section5 .ans-list-wrap ul").eq($index).addClass("show");
  });

  // sec5 QA展開/收回
  $("#section5 .ans-list-wrap .question-container").click(function () {
    $(this).parent().toggleClass("slide-down");
    $(this).siblings(".answer-container").slideToggle();
  });

  // scroll trigger動畫
  gsap.registerPlugin(ScrollTrigger);

  var kvTl = gsap.timeline();
  kvTl
    .from("#kv h2", { opacity: 0, xPercent: -100 })
    .from("#kv-img-person", { opacity: 0 });

  var sec3Tl = gsap.timeline();
  sec3Tl.from("#sec3-main-wrap ul li", {
    opacity: 0,
    xPercent: -50,
    stagger: 0.1,
  });
  ScrollTrigger.create({
    animation: sec3Tl,
    trigger: "#section3",
    start: "top center",
  });

  // go top btn
  $("#go-top-btn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  // go top btn 下滑顯示
  var $scrollTopOri = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > $scrollTopOri) {
      $("#go-top-btn").addClass("show");
    } else {
      $("#go-top-btn").removeClass("show");
    }
    setTimeout(function () {
      $scrollTopOri = st;
    }, 100);
  });
});
