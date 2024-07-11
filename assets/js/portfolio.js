let images = [
  {
    name: "../assets/images/m-h-port-img-1.jpg",
    type: "Bodycare",
    content: "LIP LINER",
  },
  {
    name: "../assets/images/m-h-port-img-2.jpg",
    content: "SCRATCH EYELINER",
    type: "Cosmetics",
  },
  {
    name: "../assets/images/m-h-port-img-3.jpg",
    content: "BAKED BLUSH",
    type: "Make Up",
  },
  {
    name: "../assets/images/m-h-port-img-4.jpg",
    content: "POINTY BALL",
    type: "Bodycare",
  },
  {
    name: "../assets/images/m-h-port-img-5.jpg",
    content: "MINERAL BLUSH",
    type: "Cosmetics",
  },
  {
    name: "../assets/images/m-h-port-img-6.jpg",
    content: "FACE PRIMER",
    type: "Make Up",
  },
  {
    name: "../assets/images/m-h-port-img-7.jpg",
    content: "COOL PRIMER",
    type: "LIP LINER",
  },
  {
    name: "../assets/images/m-h-port-img-8.jpg",
    content: "SHOWER GEL",
    type: "Make Up",
  },
  {
    name: "../assets/images/m-h-port-img-1.jpg",
    content: "FACE SOAP",
    type: "Cosmetics",
  },
];
let showall = document.querySelector(".showall");
let bodycare = document.querySelector(".bodycare");
let cosmetics = document.querySelector(".cosmetics");
let makeup = document.querySelector(".makeup");

let photos = document.querySelector(".photos");
images.forEach((el, i) => {
  return (photos.innerHTML += `
  <div class="photo">
  <div class="image">
  <img src=${el.name} alt="" />
  </div>
  <div class="content">
    <p>${el.content}</p>
    <span> Beauty, ${el.type}</span>
  </div>
</div>`);
});
showall.addEventListener("click", () => {
  photos.innerHTML = "";
  images.forEach((el, i) => {
    return (photos.innerHTML += `
    <div class="photo">
    <div class="image">
    <img src=${el.name} alt="" />
    </div>
    <div class="content">
      <p>${el.content}</p>
      <span> Beauty, ${el.type}</span>
    </div>
  </div>`);
  });
});
bodycare.addEventListener("click", () => {
  photos.innerHTML = "";
  const bodyResult = images.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Bodycare";
  });
  bodyResult.forEach((el, i) => {
    return (photos.innerHTML += `
    <div class="photo">
    <div class="image">
    <img src=${el.name} alt="" />
    </div>
    <div class="content">
      <p>${el.content}</p>
      <span> Beauty, ${el.type}</span>
    </div>
  </div>`);
  });
});
cosmetics.addEventListener("click", () => {
  photos.innerHTML = "";
  const bodyResult = images.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Cosmetics";
  });
  bodyResult.forEach((el, i) => {
    return (photos.innerHTML += `
    <div class="photo">
    <div class="image">
    <img src=${el.name} alt="" />
    </div>
    <div class="content">
      <p>${el.content}</p>
      <span> Beauty, ${el.type}</span>
    </div>
  </div>`);
  });
});
makeup.addEventListener("click", () => {
  photos.innerHTML = "";
  const bodyResult = images.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Make Up";
  });
  bodyResult.forEach((el, i) => {
    return (photos.innerHTML += `
    <div class="photo">
    <div class="image">
    <img src=${el.name} alt="" />
    </div>
    <div class="content">
      <p>${el.content}</p>
      <span> Beauty, ${el.type}</span>
    </div>
  </div>`);
  });
});
