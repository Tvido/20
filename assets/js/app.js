// ====================================================================
function showSection(el) {
  for (let i = 0; i < totalSections; i++) {
    allTopSections[i].classList.remove("active");
  }

  const target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// ====================================================================
