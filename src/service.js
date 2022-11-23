function loadService() {

  const service = document.createElement("div");
  service.setAttribute("id", "service");
  service.innerHTML = `<div class="width">
    <h1>What We Do.</h1>
      <h2>Digital Strategy</h2>
      <p>We build websites based on comprehensive research. We interview stakeholders as well as users and study your competitors to optimize the features. Based on the data collected, we form a strategy for planning and designing your website.</p>
      <p>Includes:</p>
        <ul>
          <li>UX Research</li>
          <li>Competitive Analysis</li>
          <li>User Persona</li>
        </ul>

      <h2>Branding</h2>
      <p>Branding is all about creating a distinct and cohesive identity, especially how your customers feel about your website. We rely not only on the visual aspects but also on your website’s personality to help you stand out among your competitors.</p>
      <p>Includes:</p>
        <ul>
          <li>Logo & Icon</li>
          <li>Color & Typography</li>
          <li>Style Guide</li>
        </ul>
      
      <h2>UI/UX Design</h2>
      <p>UX stands for User Experience, while UI stands for User Interface. Both are necessary to create a seamless experience for your users. We aim to design a website that reflects your brand and identity. Attracting your ideal audience is our primary focus.</p>
      <p>Includes:</p>
        <ul>
          <li>Mockups & Wireframes</li>
          <li>Sitemap</li>
          <li>Visual Design</li>
        </ul>

      <h2>Website</h2>
      <p>We customize the website according to your needs and preference. Whether you want control over your content or prefer to delegate, we can help you come up with a method that results in a product that you are 100% satisfied with.</p>
      <p>Includes:</p>
        <ul>
          <li>Wix</li>
          <li>Webflow</li>
          <li>WordPress</li>
          <li>Customized Website</li>
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