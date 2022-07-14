const menuBtn = document.getElementById("menu__btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

const offset = 60;

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

// ====================================================================

const topNav = document.querySelector(".topNav"),
  topNavList = topNav.querySelectorAll("li"),
  totaltopNavList = topNavList.length,
  allTopSections = document.querySelectorAll("section"),
  totalSections = allTopSections.length;

for (let i = 0; i < totaltopNavList; i++) {
  const aTop = topNavList[i].querySelector("a");

  aTop.addEventListener("click", function () {
    for (let i = 0; i < totalSections; i++) {
      allTopSections[i].classList.remove("back__section");
    }

    for (let u = 0; u < totaltopNavList; u++) {
      if (topNavList[u].querySelector("a").classList.contains("active")) {
        allTopSections[u].classList.add("back__section");
      }

      topNavList[u].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");

    showSection(this);
  });
}

// ====================================================================

const hideNav = document.querySelector(".hideNav"),
  hideNavList = hideNav.querySelectorAll("li"),
  totalHideNavList = hideNavList.length;

for (let i = 0; i < totalHideNavList; i++) {
  const a = hideNavList[i].querySelector("a");

  a.addEventListener("click", function () {
    for (let j = 0; j < totalHideNavList; j++) {
      hideNavList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);
  });
}
