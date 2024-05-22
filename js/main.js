function ToggleNavBar() {
  var checkBox = $("#checkbox1");
  var navbar = $("#navbarNav");

  if (checkBox.is(":checked") == true) {
    navbar.css({ height: "100vh" });
    navbar.css({ width: "100vw" });
    navbar.css({ margin: "0" });
    navbar.css({ padding: "0" });
    navbar.css({ display: "flex" });
    navbar.css({ flexDirection: "column" });
    navbar.css({ justifyContent: "center" });
    navbar.css({ alignContent: "center" });
    navbar.css({ alignItems: "center" });
    navbar.css({ gap: "50px" });
    navbar.css({ right: "0" });
    navbar.css({ top: "calc(100% + 0)" });
    navbar.css({ position: "absolute" });
    navbar.css({ backgroundColor: "rgb(240, 240, 240)" });
  } else {
    navbar.css({ display: "none" });
  }
}

$(window).on("resize", function () {
  var navbar = $("#navbarNav");
  var win = $(this); //this = window

  if (win.width() >= 1000) {
    navbar.removeAttr("style");
  }
});
