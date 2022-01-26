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

  // 複製連結
  var $temp = $("<input>");
  var $url = $(location).attr("href");

  $(".sns-btn.hreflink").on("click", function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
  });

  $(".sns-btn.facebook").click(function () {
    var url =
      "http://www.facebook.com/share.php?u=" +
      encodeURIComponent(window.location.href);
    window.open(url);
  });

  var lineShareUrl =
    "https://social-plugins.line.me/lineit/share?url=" +
    encodeURIComponent(window.location.href);
  $(".sns-btn.line").prop("href", lineShareUrl);
});
