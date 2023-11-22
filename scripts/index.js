
document.addEventListener("DOMContentLoaded", () => {
  let intro = document.querySelector(".intro");
  let logoSpan = document.querySelectorAll(".message");
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 300);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2500);

    setTimeout(() => {
      logoSpan.forEach(span => span.classList.add("end"));
      intro.style.top = "-100vh";
    }, 2300);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  // Add an event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent the default behavior (scrolling to the anchor tag)
      event.preventDefault();

      // Get the content section to show
      const contentSection = document.querySelector(
        link.getAttribute("href")
      );
      // const content = document.querySelector(link);

      // Hide all the content sections
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("active");
      });

      // Show the selected content section
      contentSection.classList.add("active");
      // content.style.fonWeight = "bold"; 
      // content.style.fontSize = "18px"; 
      // content.style.borderBottom = "3px solid rgb(46, 192, 192)"; 
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content-section");
  content.classList.add("active");
});

