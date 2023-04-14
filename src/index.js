import { nav } from "./navigation";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const linkArray = [home, menu, contact];
const linkStringArray = ["home", "menu", "contact"];

const root = document.getElementById("root");
const navContainer = document.getElementById("nav-con");

navContainer.insertAdjacentHTML("beforebegin", nav);
root.insertAdjacentHTML("afterbegin", home);

const links = document.querySelectorAll("a");
links.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (linkStringArray.includes(element.textContent.toLowerCase())) {
      links.forEach((element) => element.classList.remove("underline"));
      root.innerHTML = "";
      root.insertAdjacentHTML(
        "afterbegin",
        linkArray[linkStringArray.indexOf(element.textContent.toLowerCase())]
      );
      element.classList.add("underline");
    }
  });
});
