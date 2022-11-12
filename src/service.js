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
    </div>
    
    <div class="width center-text space-bottom">
      <h1>Like What You See?</h1>
      <p>Drop us a line at  
      <a href="mailto: citrusandspicedesign@gmail.com">citrusandspicedesign@gmail.com</a>
      </p>
    </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(service);
}

export default loadService;