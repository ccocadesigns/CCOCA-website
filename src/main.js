import "./style.css";
import bgUrl from "./assets/brand-bg.svg";

// set css var used by body background-image
document.documentElement.style.setProperty("--bg-url", `url("${bgUrl}")`);

document.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".dropdown");
  const btn = e.target.closest(".dropbtn");

  if (btn) dropdown?.classList.toggle("open");
  else dropdown?.classList.remove("open");
});