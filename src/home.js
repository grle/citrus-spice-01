function loadHome() {

  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.innerHTML = `<div class="width">
      <h1>Welcome!</h1>
      <h2>We are a website design studio dedicated to creating beautiful websites that are simple and easy-to-use for startups, private practices, nonprofits, and small businesses.</h2>
    </div>

    <div class="width">
      <h1>Who We Are.</h1>
      <h2>Friendly.</h2>
      <p>As a tight-knit studio, we would like to not only help you achieve your goals, but do it in a way where you feel supported and comfortable when working with us. We prioritize our customer’s satisfaction and would love to help you with what you need on your website.</p>
      <h2>Knowledgeable. </h2>
      <p>We understand that it can be intimidating to use technology to expand online if this is something you are unfamiliar with. We are happy to offer our assistance in helping you understand everything you need to know. </p>
      <h2>Detail Oriented.</h2>
      <p>There’s a lot of moving parts involved in creating a website. You can trust that we will be able to manage everything and guide you throughout the process to create a stress-free experience. </p>
    </div>

    <div class="width center-text space-bottom">
      <h1>Like What You See?</h1>
      <p>Drop us a line at  
      <a href="mailto: citrusandspicedesign@gmail.com">citrusandspicedesign@gmail.com</a>
      </p>
    </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(home);
}

export default loadHome;