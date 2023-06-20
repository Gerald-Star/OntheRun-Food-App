// console.log("starting");

// how to use JS to change a text content

// const myName = "The Food Basket";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.textContent = myName;
// h1.style.backgroundColor = "blue";
// h1.style.color = "white";
// h1.style.padding = "10px";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   // h1.style.backgroundColor = "blue";
//   h1.style.color = "white";
//   h1.style.padding = "10px";
// });

// How to get a current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile navigation opening
const btnNavEL = document.querySelector("btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// scroll to other links

if (href === "#")
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

if (href !== "#" && href.startWith("#")) {
  const sectionEL = document.querySelectorAll(href);
  sectionEL.scrollIntoView({ behavior: "smooth" });
}

if (link.classList.contains("main-nav-link"))
  headerEL.classList.toggle("nav-open");
