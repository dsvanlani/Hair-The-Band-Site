function changeView() {
  data = this.dataset
  // set all views display to none
  document.querySelectorAll('.view').forEach(view => {
    view.style.display = "none"
  });

  //set target display to block
  document.querySelector(data.targetview).style.display = "block"
  //collapse the navbar
  $('#navbarNavAltMarkup').collapse('hide')
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.change-view-link').forEach(element => {
    element.onclick = changeView
  });

})
