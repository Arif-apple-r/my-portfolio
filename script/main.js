// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementBottom = reveals[i].getBoundingClientRect().bottom;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active"); // Hapus jika keluar layar
    }
  }
}

const navItems = document.querySelectorAll('.nav');

navItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add('active');
  }, index * 200); // jeda antar item
});


window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll)
