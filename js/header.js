$(function () {
  $("#header-hamburger").click(function () {
    $(this).toggleClass("opened");
    $("#header .header-menu-wrap").toggleClass("opened");
  });
  $("#header .header-item-title.has-list").click(function () {
    if ($(this).closest("li").hasClass("mobile-selected")) {
      $("#header li.header-menu-item").removeClass("mobile-selected");
      $(this).closest("li").removeClass("mobile-selected");
    } else {
      $("#header li.header-menu-item").removeClass("mobile-selected");
      $(this).closest("li").addClass("mobile-selected");
    }
  });
});
