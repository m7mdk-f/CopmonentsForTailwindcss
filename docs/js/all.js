// show sign up and sign up
document.getElementById("signup").addEventListener("click", signup);
function signup() {
  document.getElementById("login").classList.toggle("hidden");
  document.getElementById("slid2").classList.toggle("hidden");
  document.getElementById("login").classList.add("op");
  document.getElementById("slid2").classList.add("op");
}
document.getElementById("signin").addEventListener("click", signup);
// sign in
let logemail = document.getElementById("logemail");
let logpas = document.getElementById("logpas");
logpas.onfocus = () => {
  document.getElementById("meseror").innerHTML = "";
};
logemail.onfocus = () => {
  document.getElementById("meseror").innerHTML = "";
};
document.getElementById("but").addEventListener("click", check);
function check() {
  let logemail = document.getElementById("logemail");
  let logpas = document.getElementById("logpas");

  if (logpas.value.trim() == "" || logemail.value.trim() == "") {
    if (logemail.value.trim() == "") {
      printerror("logemail", "comem", "Please the Email");
    }
    if (logpas.value.trim() == "") {
      printerror("logpas", "compas", "Please Enter a password.");
    }
  }
}
// sing in
document.getElementById("sub1").addEventListener("click", () => {
  takedata();
});
function takedata() {
  localStorage.id = 0;
  let Name;
  let Email;
  let pas;
  let Firstname = document.getElementById("Firstname");
  let secendname = document.getElementById("secendname");
  let emailadress = document.getElementById("emailadress");
  let pass1 = document.getElementById("pass1");
  let pass2 = document.getElementById("pass2");
  if (Firstname.value.trim() == "") {
    printerror("Firstname", "comf", "Enter Your first Name");
  } else {
    if (secendname.value.trim() == "") {
      printerror("secendname", "coms", "Enter Your secend Name");
    } else {
      if (emailadress.value.includes("@") && emailadress.value.includes(".")) {
        if (pass1.value.length >= 8) {
          if (pass1.value != pass2.value) {
            printerror("pass2", "comp", "Please Enter a password.");
          }
        } else {
          printerror(
            "pass1",
            "comi",
            "must the legth of the  password more than 8"
          );
        }
      } else {
        printerror("emailadress", "come", "Create Email address");
      }
    }
  }
}
function printerror(id, idd, mesage) {
  let id1 = document.getElementById(id);
  id1.classList.add("dark:border-red-500");
  id1.classList.add("border-red-500");
  document.getElementById(idd).innerHTML = mesage;
  id1.onfocus = () => {
    id1.classList.remove("dark:border-red-500");
    id1.classList.remove("border-red-500");
    document.getElementById(idd).innerHTML = "";
  };
}
