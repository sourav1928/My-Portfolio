// Navigation bar effect on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  // Responsive navigation sidebar menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a");
  
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  
  // Scroll to top button visibility
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  // Scroll back to top on click
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  // Reveal elements on scroll
  window.addEventListener("scroll", reveal);
  
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  // EmailJS integration
  (function () {
    emailjs.init("gppTAb4zRSrRDa2hv"); // ✅ Your Public Key
  })();
  
  const contactForm = document.getElementById("contact-form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailjs
        .sendForm("service_z6zdv1v", "template_ux68ape", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        })
        .catch(function (error) {
          alert("❌ Failed to send message, please try again.");
          console.error("EmailJS Error:", error);
        });
    });
  }
  