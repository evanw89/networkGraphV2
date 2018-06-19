function closeSlide(slide) {
  document.getElementById("slide" + slide).classList.remove("open");
}

function toggleSlide(slide) {
  document.getElementById("slide" + slide).classList.add("open");
}


// Tooltip
// var tooltip = document.getElementById("absolute-tooltip");

// var circles = document.getElementsByTagName("circle");
// for(var i = 0; i < circles.length; i++) {
// 	circles[i].addEventListener("mouseover", function(e) {
// 		var matrix = this.getScreenCTM()
//                 .translate(+this.getAttribute("cx"),
//                          +this.getAttribute("cy"));

//         tooltip.setAttribute("style", "transition: 0.3s ease; opacity: 1; padding: 15px; left: " + (window.pageXOffset + matrix.e) + "px; top: " + (window.pageYOffset + matrix.f + 30) + "px;");
// 		tooltip.innerText = e.target.attributes["data-tooltip"].value;
// 	})
// 	circles[i].addEventListener("mouseleave", function(e) {
//         tooltip.setAttribute("style", "opacity: 0; padding: 0;");
// 		tooltip.innerText = "";
// 	})
// }