import { nav } from "./navigation";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const linkArray = [home, menu, contact];
const linkStringArray = ["home", "menu", "contact"];

const root = document.getElementById("root");

root.insertAdjacentHTML("beforebegin", nav);

const links = document.querySelectorAll("a");
links.forEach((element) => {
  element.addEventListener("click", () => {
    if (linkStringArray.includes(element.textContent.toLowerCase())) {
      root.innerHTML = "";
      root.insertAdjacentHTML(
        "afterbegin",
        linkArray[linkStringArray.indexOf(element.textContent.toLowerCase())]
      );
    }
  });
});
