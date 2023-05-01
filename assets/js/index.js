const button = document.getElementById("button");
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
	nav.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((element) => {
	element.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});
