/* Javascript for Menu */

let burgerIcon  = document.querySelector('.nav-hamburger-icon');
let xIcon 	    = document.querySelector('.nav-close-icon');
let menuList    = document.querySelector('.nav-content__link-list');
let screenWidth = window.innerWidth; // returns raw number

burgerIcon.onclick = () => {
	if (screenWidth <= 1000 && xIcon.classList.contains("nav-content--hide")) {
		xIcon.classList.add('nav-content--display');
		xIcon.classList.remove('nav-content--hide');
		burgerIcon.classList.remove('nav-content--display');
		burgerIcon.classList.add('nav-content--hide');
		menuList.classList.add('nav-content--display');
		menuList.style.display = "initial";
	}
}

xIcon.onclick = () => {
	if (screenWidth <= 1000 && burgerIcon.classList.contains("nav-content--hide")) {
		xIcon.classList.remove('nav-content--display');
		xIcon.classList.add('nav-content--hide');
		burgerIcon.classList.add('nav-content--display');
		burgerIcon.classList.remove('nav-content--hide');
		menuList.style.display = "none";
	}
}

if (screenWidth >= 1000) {
	burgerIcon.style.display = "none";
} else if (screenWidth < 1000) {
	burgerIcon.style.display = "flex";
}

window.onresize = () => {
	let width = window.innerWidth;
	menuList.style.display = "none";
	if (width <= 1000) {
		burgerIcon.style.display = "flex";
		burgerIcon.onclick = () => {
			burgerIcon.style.display = "none";
			menuList.style.display = "flex";
			xIcon.style.display = "flex";
		}
		xIcon.onclick = () => {
			menuList.style.display = "none";
		}
	}
	if (width > 1000) {
		burgerIcon.style.display = "none";
		xIcon.style.display = "none";
		menuList.style.display = "flex";
	}
}