window.addEventListener("scroll", () =>
    if (window.scrollY == 100) {
      document.querySelector(nav).classList.remove('fixed-top')
    }
)
