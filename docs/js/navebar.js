function cart() {
  document.querySelector("#Cart").classList.toggle("hidden");
  document.querySelector("body").classList.toggle("overflow-hidden");
  document.querySelector(".cartanim").classList.toggle("hidden");
}

function fornav() {
  document.getElementById("mobnav").classList.toggle("hidden");
  document.getElementById("one").classList.toggle("rota1");
  document.getElementById("two").classList.toggle("rota2");
  document.getElementById("toclose").classList.toggle("hidden");
}

function show() {
  document.body.classList.toggle("overflow-hidden");
}

secondbtn = document.getElementById("secondmenu");
menu2 = document.getElementById("clickshow2");
secondbtn.addEventListener("click", () => {
  menu2.classList.toggle("hidden");
});

btnn = document.getElementById("firstmenu");
menu = document.getElementById("clickshow");
btnn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

newne = document.getElementById("mobbtn");
noplease = document.getElementById("mblclckshow");
newne.addEventListener("click", () => {
  noplease.classList.toggle("hidden");
});

clck1 = document.getElementById("clck-1");
show1 = document.getElementById("show-1");
clck1.addEventListener("click", () => {
  show1.classList.toggle("hidden");
});

clck2 = document.getElementById("clck-2");
show2 = document.getElementById("show-2");
clck2.addEventListener("click", () => {
  show2.classList.toggle("hidden");
});

clck3 = document.getElementById("clck-3");
show3 = document.getElementById("show-3");
clck3.addEventListener("click", () => {
  show3.classList.toggle("hidden");
});

clck4 = document.getElementById("clck-4");
show4 = document.getElementById("show-4");
clck4.addEventListener("click", () => {
  show4.classList.toggle("hidden");
});

clck5 = document.getElementById("clck-5");
show5 = document.getElementById("show-5");
clck5.addEventListener("click", () => {
  show5.classList.toggle("hidden");
});

button = document.getElementById("navicon");
homemenu = document.getElementById("homemenu");
button.addEventListener("click", () => {
  homemenu.classList.toggle("hidden");
});

newnew = document.getElementById("iconplus");
nothing = document.getElementById("menunun");
newnew.addEventListener("click", () => {
  menunun.classList.toggle("hidden");
});

buttonon = document.getElementById("close");
homemenuun = document.getElementById("homemenu");
buttonon.addEventListener("click", () => {
  homemenuun.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

butonon = document.getElementById("close1");
homeenuun = document.getElementById("homemenu");
butonon.addEventListener("click", () => {
  homeenuun.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

burger = document.querySelector(".navbar-burger");
menu = document.querySelector(".navbar-menu");
close1 = document.querySelector(".navbar-close");
backdrop = document.querySelector(".navbar-backdrop");
burger.addEventListener("click", hide);
close1.addEventListener("click", hide);
backdrop.addEventListener("click", hide);

function hide() {
  menu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

mobilemenu = document.getElementById("mobile-menu");
menushow = document.getElementById("menushow");
mobilemenu.addEventListener("click", () => {
  console.log(1);
  menushow.classList.toggle("hidden");
});
