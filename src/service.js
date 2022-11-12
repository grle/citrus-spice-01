function loadService() {

  const service = document.createElement("div");
  service.setAttribute("id", "service");
  service.innerHTML = `<div class="width">
    <h1>What We Do.</h1>
      <h2>Digital Strategy</h2>
      <p>The website we build for you is based on comprehensive research. We can interview stakeholders as well as the users, and research your competitors to optimize the features. Based on the data collected, we can form a plan and design your website accordingly.</p>
      <p>Includes:</p>
        <ul>
          <li>UX Research</li>
          <li>Competitive Analysis</li>
          <li>User Persona</li>
        </ul>

      <h2>Branding</h2>
      <p>Branding is all about creating a distinct and cohesive identity, and about how your customers feel about your website. We rely not only on the visual aspects, but also your website’s personality so you can stand out among your competitors.</p>
      <p>Includes:</p>
        <ul>
          <li>Logo & Icon</li>
          <li>Color & Typography</li>
          <li>Style Guide</li>
        </ul>
      
      <h2>UI/UX Design</h2>
      <p>UX stands for User Experience, while UI stands for User Interface. Both are necessary to create a seamless experience for your users when they use your website. When we design them, we aim to provide a website that reflects your brand and identity to attract your ideal audience.</p>
      <p>Includes:</p>
        <ul>
          <li>Mockups & Wireframes</li>
          <li>Sitemap</li>
          <li>Visual Design</li>
        </ul>

      <h2>Website</h2>
      <p>As a website design agency, we can build a website that best suits your needs. Whether you want more control over your content or if you want us to take care of it for you, we can help you figure out how you want your website to be built. </p>
      <p>Includes:</p>
        <ul>
          <li>Wix</li>
          <li>Webflow</li>
          <li>Static Website</li>
        </ul>
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