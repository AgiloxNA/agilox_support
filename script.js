let expandBtn = document.querySelectorAll(".expand");

let getNextSibling = function (elem, selector) {
    let sibling = elem.nextElementSibling;
    while (sibling) {
        if (sibling.className.includes(selector)) return sibling;
        sibling = sibling.nextElementSibling;
    }
}

for (let i = 0; i < expandBtn.length; i++) {
    expandBtn[i].addEventListener("click", function() {
        let nestedNav = getNextSibling(expandBtn[i], "nested");
        if (nestedNav.className === "nested-hidden") {
            nestedNav.className = "nested-shown";
        } else if (nestedNav.className === "nested-shown") {
            nestedNav.className = "nested-hidden";
        }
        if (nestedNav.className === "nested-hidden2") {
            nestedNav.className = "nested-shown2";
        } else if (nestedNav.className === "nested-shown2") {
            nestedNav.className = "nested-hidden2";
        }
    })
}

