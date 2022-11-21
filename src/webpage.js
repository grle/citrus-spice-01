import loadHome from "./home";
import loadService from "./service";
import loadWork from "./work";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("div");

    const img = document.createElement("img");
    img.classList.add("header-img");
    img.src = "img/header.png";
    img.alt = "Citrus & Spice";
    header.appendChild(img);

    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "HOME";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const serviceButton = document.createElement("button");
    serviceButton.classList.add("button-nav");
    serviceButton.textContent = "SERVICES";
    serviceButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(serviceButton);
        loadService();
    });

    const workButton = document.createElement("button");
    workButton.classList.add("button-nav");
    workButton.textContent = "WORK";
    workButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(workButton);
        loadWork();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "CONTACT";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    setActiveButton(homeButton);
    nav.appendChild(homeButton);
    nav.appendChild(serviceButton);
    nav.appendChild(workButton);
    nav.appendChild(contactButton);

    header.appendChild(nav);
    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    // main.classList.add("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("div");
    copyright.textContent = `${new Date().getFullYear()} © Citrus & Spice`;

    const signature = document.createElement("div");
    signature.innerHTML = `Website by <a target="_blank" href="https://graceavocado.com/">
    graceavocado</a>`;

    footer.appendChild(copyright);
    footer.appendChild(signature);

    return footer;
}

function initializeWeb() {
    const web = document.getElementById("content");

    web.appendChild(createHeader());
    web.appendChild(createMain());
    web.appendChild(createFooter());

    // setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWeb;