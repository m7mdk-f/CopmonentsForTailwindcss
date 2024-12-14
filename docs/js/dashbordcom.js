let objifram = JSON.parse(localStorage.obj1);
document.querySelectorAll(".show_code").forEach((b) => {
  b.nextElementSibling.style.height = `0px`;
});
document.querySelectorAll(".show_code").forEach((b, index) => {
  writecode(b, index);
});

document.querySelectorAll(".show_code").forEach(
  (b) =>
    (b.onclick = () => {
      if (b.nextElementSibling.style.height == `0px`) {
        var children = b.previousElementSibling.previousElementSibling.children;
        b.nextElementSibling.style.height = `200px`;
        let str = "";
        for (var i = 0; i < children.length; i++) {
          b.nextElementSibling.classList.remove("hidden");
          b.innerHTML = "Hide Code";
        }
        // ------------------------------
      } else {
        b.nextElementSibling.style.height = `0px`;

        b.innerHTML = "Show Code";
      }
    })
);

let copytext = document.querySelectorAll(".copycode");

copytext.forEach((c) => {
  c.addEventListener("click", copy1);
});

// copy code
function copy1(even) {
  let input =
    even.target.parentElement.nextElementSibling.nextElementSibling.children[0]
      .textContent;
  navigator.clipboard.writeText(input);
  even.target.classList.add("active");
  setTimeout(() => {
    even.target.classList.remove("active");
  }, 500);
}

function writecode(b, index) {
  b.nextElementSibling.firstElementChild.innerHTML = "";
  let str = objifram[index];
  b.nextElementSibling.firstElementChild.innerHTML = str;
  if (!b.nextElementSibling.firstElementChild.className.includes("mine")) {
    let mytheme = "dracula";
    if (!html.classList.contains("dark")) {
      mytheme = "xq-light";
    } else {
      mytheme = "dracula";
    }
    var codemi = CodeMirror.fromTextArea(
      b.nextElementSibling.firstElementChild,
      {
        mode: "xml",
        theme: mytheme,
        readOnly: "true",
        lineNumbers: "true",
        scrollbarStyle: "null",
      }
    );
    codemi.setSize(null, "auto");
    b.nextElementSibling.firstElementChild.classList.add("mine");
  }
}
