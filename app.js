const modeBtn = document.getElementById("mode");
modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem("mode", "light");
  }
};

const mode = window.localStorage.getItem("mode");
if (mode == "dark") {
  modeBtn.checked = true;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}

if (mode == "light") {
  modeBtn.checked = false;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
}

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

//auto run
let refreshINterval = setInterval(() => {
  next.click();
}, 4000);
function showSlider() {
  //remove old style of current
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbNailOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbNailOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnail[itemActive].classList.add("active");

  //clear interval
  clearInterval(refreshINterval);
  refreshINterval = setInterval(() => {
    next.click();
  }, 5000);
}

//click on thumbnail
thumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".info__header", {
  x: 10,
  duration: 2,
});
gsap.to(".navbar__menu", {
  y: 10,
  duration: 2,
});
gsap.to(".logo__button", {
  y: 10,
  duration: 2,
});
gsap.to(".aside__font", {
  x: -150,
  y: 150,
  duration: 3,
  scrollTrigger: {
    trigger: ".aside__font",
    scrub: 3,
    start: "top 0",

    // end: () => `+=${document.querySelector(".square").offsetHeight}`,
    // markers: true,
    toggleClass: "red",
  },
});
