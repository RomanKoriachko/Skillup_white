let dropdownMenu = document.querySelectorAll(".benefits-section-item-wrapper");
let dropdownItem = document.querySelectorAll(".benefits-section-subitem");
let dropdownButton = document.querySelectorAll(".benefits-section-item-btn");

for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function () {
    dropdownItem[i].classList.toggle("active");
    dropdownButton[i].classList.toggle("active-btn");
  });
}

$(document).ready(function () {
  $(".slider").slick({});
});

$(document).ready(function () {
  $(".suitable-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".suitable-slider-mobile").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-mobile-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".companies-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
$(document).ready(function () {
  $(".companies-tablet-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

let slider = document.querySelector(".slider");
let cover = document.querySelector(".slider-cover");

window.addEventListener("scroll", function () {
  let scrollHight = window.pageYOffset;
  let screenHeigth = window.screen.height;
  let screenWidth = window.screen.width;
  let sliderHight = slider.getBoundingClientRect().top + window.pageYOffset;
  if (
    scrollHight >= sliderHight - screenHeigth / 2 &&
    scrollHight <= sliderHight + screenHeigth / 4 &&
    screenWidth >= 576
  ) {
    cover.classList.add("hide");
    cover.classList.remove("show");
  } else {
    cover.classList.add("show");
    cover.classList.remove("hide");
  }
});
