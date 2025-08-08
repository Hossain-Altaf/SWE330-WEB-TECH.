// Scroll highlight (optional for scroll active nav)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


  document.getElementById("read-more-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const moreText = document.getElementById("more-text");
    const btn = this;

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  });

  document.getElementById('photo').addEventListener('click', function() {
    const list = document.getElementById('photography');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('traveling-item').addEventListener('click', function() {
    const list = document.getElementById('traveling-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('reading-item').addEventListener('click', function() {
    const list = document.getElementById('reading-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('cinema-item').addEventListener('click', function() {
    const list = document.getElementById('cinema-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });


