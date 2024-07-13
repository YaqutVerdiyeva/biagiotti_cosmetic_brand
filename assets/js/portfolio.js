let BASE_URL = `http://localhost:3000`;

let showall = document.querySelector(".showall");
let bodycare = document.querySelector(".bodycare");
let cosmetics = document.querySelector(".cosmetics");
let makeup = document.querySelector(".makeup");
let photos = document.querySelector(".photos");

let images = [];

async function getAllPortfolioImages() {
  let res = await axios(`${BASE_URL}/portfolio`);
  let data = res.data;
  images = data;
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
}
getAllPortfolioImages();

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
