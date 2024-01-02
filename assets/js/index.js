AOS.init();
// Menu Mobile
const button = document.getElementById("button"),
	nav = document.getElementById("nav");

button.addEventListener("click", () => {
	nav.classList.toggle("active");
});
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((t) => {
	t.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});
