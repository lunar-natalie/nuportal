document.addEventListener("DOMContentLoaded", (_ev) => {
    populateYearSelections();
    addFormListeners();
    addActionListeners();
});

function populateYearSelections() {
    const minYear = 1993;
    const currentYear = new Date().getFullYear();

    let yearElements = document.getElementsByClassName("year");
    for (let yearElement of yearElements) {
        for (let i = currentYear - minYear; i >= 0; --i) {
            const value = (minYear + i).toString();
            let optionElement = document.createElement("option");
            optionElement.setAttribute("value", value);
            optionElement.innerHTML = value;
            yearElement.appendChild(optionElement);
        }
    }
}

function addFormListeners() {
    let formElement = document.getElementById("listener-form");
    formElement.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const formData = new FormData(formElement);
        formData.forEach((value, key) => {
            let keyElement = document.getElementById(key);
            keyElement.textContent = value.toString();
        });

        let resultsElement = document.getElementById("listener-form-results");
        resultsElement.hidden = false;
        formElement.hidden = true;
    });
}

function addActionListeners() {
    let reloadElement = document.getElementById("reload");
    reloadElement.addEventListener("click", (_ev) => {
        window.location.reload();
    });
}
