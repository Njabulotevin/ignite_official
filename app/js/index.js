const menuBtn = $("#menuBtn");

menuBtn.click(() => {
  menuBtn.toggleClass("cancelIcon");
  $(".navPropsDiv").toggleClass("navExpanded");
  $(".nav").toggleClass("expanded");
});
