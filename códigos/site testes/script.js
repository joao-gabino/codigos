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


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".closemenu-toggle");
  const closemenu = document.querySelector(".closemenu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = closemenu.classList.contains("open");

    if (isOpen) {
      // CLOSE
      closemenu.style.height = menu.scrollHeight + "px";
      requestAnimationFrame(() => {
        closemenu.style.height = "0px";
        closemenu.classList.remove("open");
      });
    } else {
      // OPEN
      closemenu.classList.add("open");
      closemenu.style.height = menu.scrollHeight + "px";
    }
  });

  document.addEventListener("click", () => {
    closemenu.style.height = "0px";
    closemenu.classList.remove("open");
  });
});
