document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = menu.classList.contains("open");

    if (isOpen) {
      // CLOSE
      menu.style.height = menu.scrollHeight + "px";
      requestAnimationFrame(() => {
        menu.style.height = "0px";
        menu.classList.remove("open");
      });
    } else {
      // OPEN
      menu.classList.add("open");
      menu.style.height = menu.scrollHeight + "px";
    }
  });

  document.addEventListener("click", () => {
    menu.style.height = "0px";
    menu.classList.remove("open");
  });
});
