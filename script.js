
// Sidebar Nav
var sideNav = document.querySelector("aside");

function openNavbar() {
  sideNav.classList.add("translate-x-0");
  sideNav.classList.remove("-translate-x-full");
}

function closeNavbar() {
  sideNav.classList.add("-translate-x-full");
  sideNav.classList.remove("translate-x-0");
}

// Sidebar search
const search = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("mousedown", function () {
  search.classList.toggle("scale-100");
});

function closeSearch() {
  search.classList.add("scale-0");
  search.classList.remove("scale-100");
}

// sidebar calculation
const calculator = document.getElementById('search-calculator');
const btnCalculator = document.getElementById('btn-calculator');

btnCalculator.addEventListener("mousedown", function() {
  calculator.classList.toggle("scale-100");
});

function closeCalculator() {
  calculator.classList.remove("scale-100");
}





