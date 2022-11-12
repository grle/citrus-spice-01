function loadContact() {

  const cont = document.createElement("div");
  cont.setAttribute("id", "cont");
  cont.innerHTML = `<div class="width">
    <h1>Contact Us.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <div class="width center-text space-bottom">
    <h1>Let's Talk!</h1>
    <p>If you would like to work with us, contact us at
    <a href="">citrusandspice@gmail.com</a>
    </p>
  </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(cont);
}

export default loadContact;