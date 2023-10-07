document.getElementById("getStartedBtn").addEventListener("click", function () {
  document.body.classList.toggle("zoomed-out");
  setTimeout(function () {
    window.location.href = "form.html";
  }, 500);
});

document.getElementById("logoHomeBtn").addEventListener("click", function () {
  window.location.href = "home.html";
});
