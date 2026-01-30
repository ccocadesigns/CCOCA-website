import "./style.css";
import bgUrl from "./assets/bg.svg";

/* make SVG usable in CSS */
document.documentElement.style.setProperty("--bg-url", `url(${bgUrl})`);

document.querySelector("#app").innerHTML = `
  <div class="page">
    <!-- BACKGROUND -->
    <div class="bg" aria-hidden="true"></div>

    <!-- HEADER / NAV (paste header here if you have one) -->
    <header class="site-header">
      <!-- header / nav goes here -->
    </header>

    <!-- MAIN CONTENT -->
    <main class="site-main">
      <!-- page sections go here -->
    </main>

    <!-- FOOTER (THIS IS YOUR FOOTER, MOVED FROM index.html) -->
    <footer class="site-footer">
      <div class="footer-top">
        <img
          src="/src/Branding/logos/c-coca_Long Logo-White.png"
          alt="ccoca"
          class="footer_logo"
        />

        <nav class="footer_nav">
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="#sponsor">Sponsor</a>
        </nav>
      </div>

      <hr class="footer-divider" />

      <div class="footer-middle">
        <div class="footer-left">
          <p>123 random road street<br />Columbus ohio 43201</p>
          <p>CCOCADesigns@gmail.com</p>
        </div>

        <div class="footer-right">
          <p class="footer-title">Sign up for our newsletter</p>

          <form class="footer-form">
            <label class="footer-label">Type in Email Address*</label>
            <input
              type="email"
              class="footer-input"
              placeholder="your@email.com"
            />
          </form>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="footer-bottom">
        <nav class="footer-bottom-nav">
          <a href="https://www.instagram.com/ccocadesigns" target="_blank" rel="noopener noreferrer">
            <img
              src="/src/Branding/logos/Instagram_logo.png"
              alt="instagram"
              class="insta-icon"
            />
          </a>

          <a href="https://join.slack.com/t/cccoca/shared_invite/zt-3megxjl9u-DRGbfaYg3RtKeodU6XUOOA" target="_blank" rel="noopener noreferrer">
            <img
              src="/src/Branding/logos/Slack.png"
              alt="slack"
              class="slack-icon"
            />
          </a>

          <a href="https://www.linkedin.com/in/ccoca-designs-a740a53a1/" target="_blank" rel="noopener noreferrer">
            <img
              src="/src/Branding/logos/linkdin.png"
              alt="linkedin"
              class="linkedin-icon"
            />
          </a>
        </nav>
      </div>
    </footer>
  </div>
`;




document.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".dropdown");
  const btn = e.target.closest(".dropbtn");

  if (btn) dropdown?.classList.toggle("open");
  else dropdown?.classList.remove("open");
});
