
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyHeader()};

// Get the header
let header = document.getElementById("mybot");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

