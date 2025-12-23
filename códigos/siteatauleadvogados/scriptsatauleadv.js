

document.addEventListener("DOMContentLoaded", () => {
  const divTop = document.querySelector(".divtop");
  const floatingWrapper = document.querySelector(".floating-dropdown-wrapper");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        floatingWrapper.classList.remove("show");
      } else {
        floatingWrapper.classList.add("show");
      }
    },
    { threshold: 0 }
  );

  observer.observe(divTop);
});
