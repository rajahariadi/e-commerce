function on() {
    var filter = document.getElementById("filter");
    var overlay = document.getElementById("overlay");
  
    filter.classList.toggle("filterOn");
    overlay.classList.toggle("overlayOn");
  
    if (filter.classList.contains("filterOn")) {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  
    overlay.addEventListener("click", function (e) {
      if (e.target.id === "overlay") {
        filter.classList.remove("filterOn");
        overlay.classList.remove("overlayOn");
        overlay.style.display = "none";
      }
    });
  }
  