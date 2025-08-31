


document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // optional: read data-delay for stagger
        const delay = entry.target.getAttribute("data-delay");
        if (delay) entry.target.style.setProperty("--reveal-delay", delay);

        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -5% 0px"
  });

  reveals.forEach((el) => observer.observe(el));
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault(); // default jump hatana
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth"
        });
    });
  });