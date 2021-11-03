let mainNav = document.querySelectorAll(".nav-link");

for (let i = 0; i < mainNav.length; i++) {
    mainNav[i].addEventListener("click", function() {
        let nestedNav = mainNav[i].firstElementChild;
        if (nestedNav.className.includes("hidden")) {
            nestedNav.className = "nested-shown";
        } else {
            nestedNav.className = "nested-hidden";
        }
    })
}

