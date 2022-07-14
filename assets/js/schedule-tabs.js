const tabHeader = document.getElementsByClassName("tab__header")[0];
const tabBody = document.getElementsByClassName("tab__body")[0];

const tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
  });
}
