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
		window.pageYOffset + (window.innerHeight * 3) / 4;
	allElements.forEach((e) => {
		if (windowTop >= e.offsetTop) {
			e.classList.add("animating");
		} else {
			e.classList.remove("animating");
		}
	});
}

window.addEventListener(
	"scroll",
	debounce(animeScroll, 150)
);

function debounce(func, wait) {
	let timer = null;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	};
}
