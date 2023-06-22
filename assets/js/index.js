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

// Animation Scroll
const allElements = document.querySelectorAll(
	"[wm-animation]"
);

function animeScroll() {
	const windowTop =
		window.scrollY + window.innerHeight * 0.85;
	allElements.forEach((e) => {
		if (windowTop > e.offsetTop) {
			e.classList.add("animating");
		}
	});
}

animeScroll();

window.addEventListener(
	"scroll",
	debounce(animeScroll, 75)
);

function debounce(func, wait) {
	let timer = null;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	};
}
