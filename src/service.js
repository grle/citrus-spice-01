function loadService() {

  const service = document.createElement("div");
  service.setAttribute("id", "service");
  service.innerHTML = `<div class="width">
    <h1>What We Do.</h1>
    <h2>Digital Strategy</h2>
    <p>a</p>
    <h2>UI/UX Design</h2>
    <p>a</p>
    <h2>Content</h2>
    <p>a</p>
    <h2>Website</h2>
    <p>a</p>
    <h2>Branding</h2>
    <p>a</p>
    
    <div class="width center-text space-bottom">
      <h1>Let's Talk!</h1>
      <p>If you would like to work with us, contact us at
        <a href="">citrusandspice@gmail.com</a>
      </p>
    </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(service);
}

export default loadService;