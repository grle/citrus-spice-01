function loadWork() {

  const work = document.createElement("div");
  work.setAttribute("id", "work");
  work.innerHTML = `<div class="width">
      <h1>Our Work.</h1>
      <p>Here are some of our past works with previous clients, with our customer’s satisfaction guaranteed. 
        You can reach out at 
        <a href="mailto: citrusandspicedesign@gmail.com">citrusandspicedesign@gmail.com</a>
        if you would like to work with us or get more information. 
      </p> 
      <h3>—
        <a href="https://pelzelsauto.com" target="_blank">Pelzel's Auto Repair</a>
      </h3>
      <h3>—
        <a href="https://grle.github.io/dhgm/" target="_blank">Dunamis Harvest Global Ministry</a>
      </h3>
      <h3>—
        <a href="https://www.polariseye.com/" target="_blank">Polaris Eye & Laser</a>
      </h3>
    </div>

    <div class="width center-text space-bottom">
      <h1>Like What You See?</h1>
      <p>Drop us a line at  
      <a href="mailto: citrusandspicedesign@gmail.com">citrusandspicedesign@gmail.com</a>
      </p>
    </div>`;

  const main = document.getElementById("main");
  main.innerHTML = ``;
  main.appendChild(work);
}

export default loadWork;