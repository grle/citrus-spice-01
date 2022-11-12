function loadHome() {

  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.innerHTML = `<div class="width">
    <h1>Welcome!</h1>
    <p>We are a website design studio dedicated to creating beautiful websites that are simple and easy-to-use for startups, private practices, and small businesses.</p>
    </div>

    <div class="width">
    <h1>Our Process.</h1>
    <p>We are a website design studio dedicated to creating beautiful websites that are simple and easy-to-use for startups, private practices, and small businesses.</p>
    </div>

    <div class="width center-text space-bottom">
    <h1>Let's Talk!</h1>
    <p>If you would like to work with us, contact us at
      <a href="">citrusandspice@gmail.com</a>
    </p>
  </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(home);
}

export default loadHome;