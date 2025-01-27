const toggleTheme = document.getElementById("toggleTheme");
const sunIcon = toggleTheme.querySelector(".fa-sun");
const moonIcon = toggleTheme.querySelector(".fa-moon");
const spanText = toggleTheme.querySelector("span");

// Initialize theme based on localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    sunIcon.style.display = "inline-block"; // Show sun icon
    moonIcon.style.display = "none";
    spanText.textContent = "Aydınlık Mod";
} else {
    document.body.classList.remove("dark-mode");
    sunIcon.style.display = "none"; // Show moon icon
    moonIcon.style.display = "inline-block";
    spanText.textContent = "Karanlık Mod";
}

// Toggle theme on button click
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        sunIcon.style.display = "inline-block"; // Show sun icon
        moonIcon.style.display = "none";
        spanText.textContent = "Aydınlık Mod";
        localStorage.setItem("theme", "dark");
    } else {
        sunIcon.style.display = "none"; // Show moon icon
        moonIcon.style.display = "inline-block";
        spanText.textContent = "Karanlık Mod";
        localStorage.setItem("theme", "light");
    }
});
