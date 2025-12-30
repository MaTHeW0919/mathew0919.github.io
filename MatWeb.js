const toggleBtn = document.getElementById("themeToggle");
const logo = document.getElementById("logo");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "⚪";
    logo.src = "images/logo-dark.png";
  } else {
    toggleBtn.textContent = "⚫";
    logo.src = "images/logo-light.png";
  }
});

// Scroll animations (re-trigger every time you scroll back and forth)
const scrollElements = document.querySelectorAll('.scroll-element');

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active'); 
    } else {
      entry.target.classList.remove('active'); 
    }
  });
}, { threshold: 0.2 }); 
scrollElements.forEach(el => scrollObserver.observe(el));
