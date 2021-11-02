let mainNav = document.getElementById("cmsn_guide");
let nestedNav = document.querySelector(".nested-hidden");

mainNav.addEventListener("click", function() {
    if (nestedNav.className.includes("hidden") === true) {
        nestedNav.className = "nested-shown";
    } else if (nestedNav.className.includes("shown") === true) {
        nestedNav.className = "nested-hidden";
    }
});