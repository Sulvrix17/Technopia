function ToggleNavBar() {
  var navbar = $("#navbarNav");
  var checkBox = $("#checkbox1");
  if (checkBox.checked == true) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}
