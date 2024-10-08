
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
};

// search produk
const cari = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list")
  const product = document.querySelectorAll(".produk")
  const pname = storeitems.getElementsByTagName("h2")

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) >  -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }

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







