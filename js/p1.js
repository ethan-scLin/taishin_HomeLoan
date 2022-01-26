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

  // sec3 備註展開
  $("#sec3-bottom-area .toggle-btn").click(function () {
    $(this).toggleClass("toggle-up");
    $("#sec3-bottom-area ul").slideToggle();
  });

  // sec6 tag切換
  $("#sec5-select").change(function () {
    var $index = $(this).val();
    $("#section6 .tag").eq($index).click();
  });
  $("#section6 .tag").click(function () {
    $("#section6 .tag").not(this).removeClass("selected");
    $(this).addClass("selected");
    var $index = $(this).index();
    $("#section6 .ans-list-wrap ul").removeClass("show");
    $("#section6 .ans-list-wrap ul").eq($index).addClass("show");
  });

  // sec5 QA展開/收回
  $("#section6 .ans-list-wrap .question-container").click(function () {
    $(this).parent().toggleClass("slide-down");
    $(this).siblings(".answer-container").slideToggle();
  });

  // sec7 其他方案slider
  $("#sec7-slider").slick({
    dots: false,
    slidersToShow: 1,
    infinite: false,
    prevArrow: $("#sec7-prev-btn"),
    nextArrow: $("#sec7-next-btn"),
  });

  // scroll trigger動畫
  gsap.registerPlugin(ScrollTrigger);
  // kv動畫
  var kvtl = gsap.timeline();
  kvtl
    .from("#kv h2,#kv h3", {
      opacity: 0,
      x: -50,
    })
    .from("#kv-slider", {
      opacity: 0,
      x: -50,
    });
  // sec1動畫
  var sec1tl = gsap.timeline();
  sec1tl.from("#section1 li", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
  });
  ScrollTrigger.create({
    animation: sec1tl,
    trigger: "#section1",
    start: "top center",
  });
  // sec4動畫
  var sec4tl = gsap.timeline();
  sec4tl.from("#section4 .card", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
  });
  ScrollTrigger.create({
    animation: sec4tl,
    trigger: "#section4",
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
    if ($(window).scrollTop() > $scrollTopOri) {
      $("#go-top-btn").addClass("show");
    } else {
      $("#go-top-btn").removeClass("show");
    }
    $scrollTopOri = $(window).scrollTop();
  });
});
