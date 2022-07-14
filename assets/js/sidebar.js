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

// ====================================================================

const sideNav = document.querySelector(".sideNav"),
  sideNavList = sideNav.querySelectorAll("li"),
  totalSideNavList = sideNavList.length;

for (let i = 0; i < totalSideNavList; i++) {
  const a = sideNavList[i].querySelector("a");

  a.addEventListener("click", function () {
    for (let j = 0; j < totalSideNavList; j++) {
      sideNavList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);
  });
}
