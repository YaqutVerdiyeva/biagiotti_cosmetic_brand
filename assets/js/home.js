let openCreme = document.querySelector(".creme");
let closeCreme = document.querySelector(".close-creme");
let cremeModal = document.querySelector(".about-creme");
let openBalm = document.querySelector(".balm");
let closeBalm = document.querySelector(".close-balm");
let balmModal = document.querySelector(".about-balm");
let openSpray = document.querySelector(".spray");
let closeSpray = document.querySelector(".close-spray");
let sprayModal = document.querySelector(".about-spray");
let openTint = document.querySelector(".tint");
let closeTint = document.querySelector(".close-tint");
let tintModal = document.querySelector(".about-tint");
let openVideo = document.querySelector(".open-video-btn");
let closeVideo = document.querySelector(".close-video");
let videoModal = document.querySelector(".video");
let video = document.querySelector(".my-video");

openCreme.addEventListener("click", () => {
  cremeModal.style.height = "100vh";
});
closeCreme.addEventListener("click", () => {
  cremeModal.style.height = "0";
});
openBalm.addEventListener("click", () => {
  balmModal.style.height = "100vh";
});
closeBalm.addEventListener("click", () => {
  balmModal.style.height = "0";
});
openSpray.addEventListener("click", () => {
  sprayModal.style.height = "100vh";
});
closeSpray.addEventListener("click", () => {
  sprayModal.style.height = "0";
});
openTint.addEventListener("click", () => {
  tintModal.style.height = "100vh";
});
closeTint.addEventListener("click", () => {
  tintModal.style.height = "0";
});
openVideo.addEventListener("click", () => {
  videoModal.style.width = "100%";
});
closeVideo.addEventListener("click", () => {
  videoModal.style.width = "0";
});

let star1 = document.querySelectorAll(".star1");
let star2 = document.querySelectorAll(".star2");
let star3 = document.querySelectorAll(".star3");
let star4 = document.querySelectorAll(".star4");

let arr1 = [];
star1.forEach((el, index) => {
  el.addEventListener("click", () => {
    arr1.push(index + 1);
    console.log(arr1);
    let sum = arr1.reduce((curr, a) => curr + a, 0);
    let middleSum = Math.ceil(sum / arr1.length);
    document.querySelector(".result1").innerHTML = `${middleSum}/5`;
    star1.forEach((elem, i) => {
      if (index >= i) {
        elem.style.color = "yellow";
      } else {
        elem.style.color = "#c4c4c4";
      }
    });
  });
});
let arr2 = [];
star2.forEach((el, index) => {
  el.addEventListener("click", () => {
    arr2.push(index + 1);
    console.log(arr2);
    let sum = arr2.reduce((curr, a) => curr + a, 0);
    let middleSum = Math.ceil(sum / arr2.length);
    document.querySelector(".result2").innerHTML = `${middleSum}/5`;
    star2.forEach((elem, i) => {
      if (index >= i) {
        elem.style.color = "yellow";
      } else {
        elem.style.color = "#c4c4c4";
      }
    });
  });
});
let arr3 = [];
star3.forEach((el, index) => {
  el.addEventListener("click", () => {
    arr3.push(index + 1);
    console.log(arr3);
    let sum = arr3.reduce((curr, a) => curr + a, 0);
    let middleSum = Math.ceil(sum / arr3.length);
    document.querySelector(".result3").innerHTML = `${middleSum}/5`;
    star3.forEach((elem, i) => {
      if (index >= i) {
        elem.style.color = "yellow";
      } else {
        elem.style.color = "#c4c4c4";
      }
    });
  });
});
let arr4 = [];
star4.forEach((el, index) => {
  el.addEventListener("click", () => {
    arr4.push(index + 1);
    console.log(arr4);
    let sum = arr4.reduce((curr, a) => curr + a, 0);
    let middleSum = Math.ceil(sum / arr4.length);
    document.querySelector(".result4").innerHTML = `${middleSum}/5`;
    star4.forEach((elem, i) => {
      if (index >= i) {
        elem.style.color = "yellow";
      } else {
        elem.style.color = "#c4c4c4";
      }
    });
  });
});

let counter1 = document.querySelector(".count-1");
let counter2 = document.querySelector(".count-2");
let counter3 = document.querySelector(".count-3");

function scrollFunction1() {
  let sum = 0;
  let interval = setInterval(function () {
    sum = sum + 1;
    counter1.innerHTML = sum;
    if (sum == 115) {
      clearInterval(interval);
    }
  }, 25);
}
function scrollFunction2() {
  let sum2 = 0;
  let interval = setInterval(function () {
    sum2 = sum2 + 1;
    counter2.innerHTML = sum2;
    if (sum2 == 106) {
      clearInterval(interval);
    }
  }, 25);
}
function scrollFunction3() {
  let sum3 = 0;
  let interval = setInterval(function () {
    sum3 = sum3 + 1;
    counter3.innerHTML = sum3;
    if (sum3 == 122) {
      clearInterval(interval);
    }
  }, 25);
}

let scrolled = false;

window.addEventListener("scroll", function () {
  if (
    !scrolled &&
    document.documentElement.scrollTop > 2910 &&
    document.documentElement.scrollTop < 2915
  ) {
    scrollFunction1();
    scrollFunction2();
    scrollFunction3();

    scrolled = true;
  }
});
