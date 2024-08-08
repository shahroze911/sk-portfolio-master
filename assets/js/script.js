"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
	modalContainer.classList.toggle("active");
	overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener("click", function () {
		modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
		modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
		modalTitle.innerHTML = this.querySelector(
			"[data-testimonials-title]"
		).innerHTML;
		modalText.innerHTML = this.querySelector(
			"[data-testimonials-text]"
		).innerHTML;

		testimonialsModalFunc();
	});
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
	elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
		filterFunc(selectedValue);
	});
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue === "all") {
			filterItems[i].classList.add("active");
		} else if (selectedValue === filterItems[i].dataset.category) {
			filterItems[i].classList.add("active");
		} else {
			filterItems[i].classList.remove("active");
		}
	}
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		filterFunc(selectedValue);

		lastClickedBtn.classList.remove("active");
		this.classList.add("active");
		lastClickedBtn = this;
	});
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener("input", function () {
		// check form validation
		if (form.checkValidity()) {
			formBtn.removeAttribute("disabled");
		} else {
			formBtn.setAttribute("disabled", "");
		}
	});
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
				pages[i].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove("active");
				navigationLinks[i].classList.remove("active");
			}
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".clients-list");
	const clients = document.querySelector(".clients");
	const items = Array.from(container.children);

	// Clone items to create an infinite loop effect
	items.forEach((item) => {
		container.appendChild(item.cloneNode(true));
	});

	// Pause animation on hover
	clients.addEventListener("mouseenter", () => {
		clients.style.animationPlayState = "paused";
	});

	clients.addEventListener("mouseleave", () => {
		clients.style.animationPlayState = "running";
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const counters = document.querySelectorAll(".counter-digits");

	counters.forEach((counter) => {
		const updateCount = () => {
			const target = +counter.parentElement.getAttribute("data-target");
			const count = +counter.innerText;

			const increment = target / 200; // Change the divisor for speed adjustment

			if (count < target) {
				counter.innerText = Math.ceil(count + increment);
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = target;
			}
		};

		updateCount();
	});
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     var quill = new Quill('#editor', {
//       theme: 'snow',
//       modules: {
//         toolbar: [
//           // [{ 'font': [] }],
//           [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//           ['bold', 'italic', 'underline', 'strike'],
//           [{ 'color': [] }, { 'background': [] }],
//           [{ 'script': 'sub' }, { 'script': 'super' }],
//           // ['blockquote', 'code-block'],
//           [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//           // [{ 'indent': '-1' }, { 'indent': '+1' }],
//           // [{ 'direction': 'rtl' }],
//           // [{ 'align': [] }],
//           // ['link', 'image', 'video'],
//           ['clean']
//         ]
//       }
//     });

//     // If you need to submit the content with a form, you can use a hidden input
//     var form = document.querySelector('form');
//     form.onsubmit = function() {
//       // Populate hidden form on submit
//       var content = document.querySelector('input[name=message]');
//       content.value = quill.root.innerHTML;
//     };
//   });


document.addEventListener("DOMContentLoaded", function () {
	const testimonialsList = document.querySelector(".testimonials-list");
	const testimonialsItems = Array.from(
		document.querySelectorAll(".testimonials-item")
	);
	const leftArrow = document.querySelector(".left-arrow");
	const rightArrow = document.querySelector(".right-arrow");

	let currentIndex = 0;

	function scrollToIndex(index) {
		testimonialsItems[index].scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
	}

	leftArrow.addEventListener("click", () => {
		currentIndex =
			currentIndex > 0 ? currentIndex - 1 : testimonialsItems.length - 1;
		scrollToIndex(currentIndex);
	});

	rightArrow.addEventListener("click", () => {
		currentIndex =
			currentIndex < testimonialsItems.length - 1 ? currentIndex + 1 : 0;
		scrollToIndex(currentIndex);
	});

	// Initialize view to the first item
	scrollToIndex(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
	const testimonialsList = document.querySelector(".testimonials-list");
	const testimonialsItems = Array.from(
		document.querySelectorAll(".testimonials-item")
	);
	const leftArrow = document.querySelector(".left-arrow");
	const rightArrow = document.querySelector(".right-arrow");

	let currentIndex = 0;

	function scrollToIndex(index) {
		testimonialsItems[index].scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
	}

	leftArrow.addEventListener("click", () => {
		currentIndex =
			currentIndex > 0 ? currentIndex - 1 : testimonialsItems.length - 1;
		scrollToIndex(currentIndex);
	});

	rightArrow.addEventListener("click", () => {
		currentIndex =
			currentIndex < testimonialsItems.length - 1 ? currentIndex + 1 : 0;
		scrollToIndex(currentIndex);
	});

	// Initialize view to the first item
	scrollToIndex(currentIndex);
});

