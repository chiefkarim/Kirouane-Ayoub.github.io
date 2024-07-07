import Showdown from "showdown";

document.addEventListener("DOMContentLoaded", function () {
  console.log("lol");
  fetch("content.md")
    .then((response) => response.text())
    .then((text) => {
      console.log("text", text);
      var converter = new Showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("content").innerHTML = html;
    });
});
