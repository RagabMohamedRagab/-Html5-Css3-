let E1 = document.getElementById("do1"),
  E2 = document.getElementById("do2"),
  E3 = document.getElementById("do3"),
  E4 = document.getElementById("do4"),
  E5 = document.getElementById("do5");
E1.onclick = function () {
  if ((document.getElementsByClassName("Fuck1")[0].style.dispaly = "none")) {
    document.getElementsByClassName("Fuck1")[0].style.display = "block";
  }
};
E1.ondblclick = function () {
  if ((document.getElementsByClassName("Fuck1")[0].style.dispaly = "block")) {
    document.getElementsByClassName("Fuck1")[0].style.display = "none";
  }
};
E2.onclick = function () {
  if ((document.getElementsByClassName("Fuck3")[0].style.display = "none")) {
    document.getElementsByClassName("Fuck3")[0].style.display = "block";
  }
};
E2.ondblclick = function () {
  if ((document.getElementsByClassName("Fuck3")[0].style.display = "block")) {
    document.getElementsByClassName("Fuck3")[0].style.display = "none";
  } else {
    document.getElementsByClassName("Fuck3")[0].style.display = "none";
  }
};
E3.onclick = function () {
  if ((document.getElementsByClassName("Fuck4")[0].style.display = "none")) {
    document.getElementsByClassName("Fuck4")[0].style.display = "block";
  }
};
E3.ondblclick = function () {
  if ((document.getElementsByClassName("Fuck4")[0].style.display = "block")) {
    document.getElementsByClassName("Fuck4")[0].style.display = "none";
  }
};
E4.onclick = function () {
  if ((document.getElementsByClassName("Fuck5")[0].style.display = "none")) {
    document.getElementsByClassName("Fuck5")[0].style.display = "block";
  }
};
E4.ondblclick = function () {
  if ((document.getElementsByClassName("Fuck5")[0].style.display = "block")) {
    document.getElementsByClassName("Fuck5")[0].style.display = "none";
  }
};
E5.onclick = function () {
  if ((document.getElementsByClassName("Fuck6")[0].style.display = "none")) {
    document.getElementsByClassName("Fuck6")[0].style.display = "block";
  }
};
E5.ondblclick = function () {
  if ((document.getElementsByClassName("Fuck6")[0].style.display = "block")) {
    document.getElementsByClassName("Fuck6")[0].style.display = "none";
  }
};
let Element = document.getElementsByClassName("Text");
Element[0].onfocus = function () {
  this.setAttribute("placeholder", "Full Name");
};
Element[0].onblur = function () {
  this.setAttribute("placeholder", "");
};

Element[1].onfocus = function () {
  this.setAttribute("placeholder", "Full Email");
};
Element[1].onblur = function () {
  this.setAttribute("placeholder", "");
};
Element[2].onfocus = function () {
  this.setAttribute("placeholder", "Message");
};
Element[2].onblur = function () {
  this.setAttribute("placeholder", "");
};
let FuckVariable = document.getElementById("last");
window.onscroll = function () {
  if (this.scrollY >= 250) {
    FuckVariable.style.display = "block";
  } else {
    FuckVariable.style.display = "none";
  }
};
FuckVariable.onclick = function () {
  window.scroll(0, 0);
  window.style.transition = "all 0.9s ease-in-out";
};
