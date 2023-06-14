let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec=> {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*= " + id + "]").classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.toggle('active');
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content , .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img ,.skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

var typed = new Typed("#multiple-text", {
  strings: ["Desenvolvedor web", "Graduando em Ciência da Computação"],
  typeSpeed: 50,
  backspeed: 100,
  backDelay: 2000,
  loop: true,
});
