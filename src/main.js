import "./style.css";

document.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".dropdown");
  const btn = e.target.closest(".dropbtn");

  if (btn) dropdown?.classList.toggle("open");
  else dropdown?.classList.remove("open");
});
