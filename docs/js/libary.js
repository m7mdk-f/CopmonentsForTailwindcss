document.querySelectorAll(".show_code").forEach((b) => {
  b.nextElementSibling.style.height = `0px`;
});
document.querySelectorAll(".show_code").forEach(
  (b) =>
    (b.onclick = () => {
      if (b.nextElementSibling.style.height == `0px`) {
        var children = b.previousElementSibling.children;
        b.nextElementSibling.style.height = `${20 * children.length}px`;
        b.nextElementSibling.firstElementChild.innerHTML = "";
        let str = "";
        for (var i = 0; i < children.length; i++) {
          if (i != children.length - 1) {
            str += `${children[i].outerHTML.replace(/\s{2,}/g, " ")}
`;
          } else {
            str += `${children[i].outerHTML.replace(/\s{2,}/g, " ")}`;
          }
          b.nextElementSibling.classList.remove("hidden");
          b.innerHTML = "Hide Code";
        }
        b.nextElementSibling.firstElementChild.innerHTML = str;
        if (
          !b.nextElementSibling.firstElementChild.className.includes("mine")
        ) {
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
      } else {
        b.nextElementSibling.style.height = `0px`;
        b.innerHTML = "Show Code";
      }
    })
);
