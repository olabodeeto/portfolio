window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("Hello scroll");
    document.getElementById("heroicons").className = "move-hero-icons";
  } else {
    document.getElementById("heroicons").className = "hero-icons";
  }
}

function checker() {
  let check = document.getElementById("check");
  check.checked = !check.checked;
}
