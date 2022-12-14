function loadContact() {

  const cont = document.createElement("div");
  cont.setAttribute("id", "cont");
  cont.innerHTML = `<div class="width">
    <h1>Contact Us.</h1>
    <p>We would love to hear from you. Feel free to contact us with any questions you have, and we will get back to you within 24 hours.</p>
    <p>EMAIL: 
    <a href="mailto: citrusandspicedesign@gmail.com">citrusandspicedesign@gmail.com</a>
    </p>
    <p>PHONE: <span>(360) 420-3175</span></p>
  </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(cont);
}

export default loadContact;