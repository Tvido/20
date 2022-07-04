const menuBtn = document.getElementById("menu__btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

const offset = 50;

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__open");
});

window.addEventListener("scroll", () => {
  if (pageYOffset > offset) {
    navbar.classList.add("navbar__active");
  } else {
    navbar.classList.remove("navbar__active");
  }
});

// =======================================================

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// =======================================================

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize__theme");
const fontSize = document.querySelectorAll(".choose__size span");
const colorPalette = document.querySelectorAll(".choose__color span");
const root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize__theme")) {
    themeModal.style.display = "none";
  }
};

const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font__size-1")) {
      fontSize = "10px";
    } else if (size.classList.contains("font__size-2")) {
      fontSize = "12px";
    } else if (size.classList.contains("font__size-3")) {
      fontSize = "14px";
    } else if (size.classList.contains("font__size-4")) {
      fontSize = "16px";
    } else if (size.classList.contains("font__size-5")) {
      fontSize = "18px";
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");

    root.style.setProperty("--color-primary-hue", primaryHue);
  });
});

let colorLightLightness;
let colorWhiteLightness;
let colorDarkLightness;

const changeBg = () => {
  root.style.setProperty("--color-light-lightness", colorLightLightness);
  root.style.setProperty("--color-white-lightness", colorWhiteLightness);
  root.style.setProperty("--color-dark-lightness", colorDarkLightness);
};

bg1.addEventListener("click", () => {
  colorLightLightness = "95%";
  colorWhiteLightness = "100%";
  colorDarkLightness = "17%";

  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg2.addEventListener("click", () => {
  colorLightLightness = "15%";
  colorWhiteLightness = "20%";
  colorDarkLightness = "95%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg3.addEventListener("click", () => {
  colorLightLightness = "0%";
  colorWhiteLightness = "3%";
  colorDarkLightness = "95%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});

// =======================================================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", () => {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
