let products = [
  {
    image: "../assets/images/Shop-img-1-5-600x803.jpg",
    name: "PINK LIPSTICK",
    type: "Lip Gloss",
    price: 49.0,
  },
  {
    image: "../assets/images/Shop-img-2-600x803.jpg",
    name: "HAND CREME",
    type: "Foundation",
    price: 52.0,
  },
  {
    image: "../assets/images/Shop-img-36-300x389.jpg",
    name: "CHARCOAL MASK",
    type: "Face Masks",
    price: 83.0,
  },
  {
    image: "../assets/images/Shop-img-6-600x803.jpg",
    name: "COCONUT HAND CREME",
    type: "Cosmetic",
    price: 29.0,
  },
  {
    image: "../assets/images/Shop-img-6-600x803.jpg",
    name: "LOTION",
    type: "Organic",
    price: 22.0,
  },
  {
    image: "../assets/images/Shop-img-3-600x803.jpg",
    name: "BEAUTY TONER",
    type: "Face Masks",
    price: 45.0,
  },
  {
    image: "../assets/images/Shop-img-44-300x389.jpg",
    name: "PANORAMIC WHEEL",
    type: "Perfumes",
    price: 66.0,
  },
  {
    image: "../assets/images/Shop-img-3-600x803.jpg",
    name: "CREME",
    type: "Organic",
    price: 45.0,
  },
  {
    image: "../assets/images/Shop-img-4-600x803.jpg",
    name: "EYE DROPS",
    type: "Face Masks",
    price: 18.0,
  },
  {
    image: "../assets/images/Shop-img-45-300x389.jpg",
    name: "POSH SAFARI",
    type: "Perfumes",
    price: 45.0,
  },
  {
    image: "../assets/images/Shop-img-36-300x389.jpg",
    name: "INSTANT DETOX",
    type: "Cosmetic",
    price: 64.0,
  },
  {
    image: "../assets/images/Shop-img-7-600x803.jpg",
    name: "GULA CREME",
    type: "Foundation",
    price: 38.0,
  },
  {
    image: "../assets/images/Shop-img-53-300x389.jpg",
    name: "VOLUME CONDITIONER",
    type: "Perfumes",
    price: 89.0,
  },
  {
    image: "../assets/images/Shop-img-64-300x389.jpg",
    name: "LIP MASK",
    type: "Face Masks",
    price: 35.0,
  },

  {
    image: "../assets/images/Shop-img-36-300x389.jpg",
    name: "K DREAM",
    type: "Organic",
    price: 83.0,
  },
];

let allproducts = document.querySelector(".allproducts");
let cosmetic = document.querySelector(".cosmetic");
let facemask = document.querySelector(".facemask");
let foundation = document.querySelector(".foundation");
let lipgloss = document.querySelector(".lipgloss");
let organic = document.querySelector(".organic");
let perfumes = document.querySelector(".perfumes");
let productSection = document.querySelector(".products");
let select = document.querySelector(".select");

products.forEach((el, i) => {
  return (productSection.innerHTML += `
  <div class="product">
              <div class="photo">
                <img
                  src=${el.image}
                  alt=""
                />
                <div class="icons">
                  <div class="icon">
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div class="text">
                <p class="first-p">${el.name}</p>
                <p class="second-p">${el.type}</p>
                <span>$${el.price}</span>
              </div>
            </div>`);
});

allproducts.addEventListener("click", () => {
  productSection.innerHTML = "";

  products.forEach((el, i) => {
    return (productSection.innerHTML += `
  <div class="product">
              <div class="photo">
                <img
                  src=${el.image}
                  alt=""
                />
                <div class="icons">
                  <div class="icon">
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div class="text">
                <p class="first-p">${el.name}</p>
                <p class="second-p">${el.type}</p>
                <span>$${el.price}</span>
              </div>
            </div>`);
  });
});
cosmetic.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Cosmetic";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
  <div class="product">
              <div class="photo">
                <img
                  src=${el.image}
                  alt=""
                />
                <div class="icons">
                  <div class="icon">
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div class="text">
                <p class="first-p">${el.name}</p>
                <p class="second-p">${el.type}</p>
                <span>$${el.price}</span>
              </div>
            </div>`);
  });
});
facemask.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Face Masks";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
    <div class="product">
                <div class="photo">
                  <img
                    src=${el.image}
                    alt=""
                  />
                  <div class="icons">
                    <div class="icon">
                      <i class="fa-solid fa-plus"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>$${el.price}</span>
                </div>
              </div>`);
  });
});
foundation.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Foundation";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
    <div class="product">
                <div class="photo">
                  <img
                    src=${el.image}
                    alt=""
                  />
                  <div class="icons">
                    <div class="icon">
                      <i class="fa-solid fa-plus"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>$${el.price}</span>
                </div>
              </div>`);
  });
});
lipgloss.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Lip Gloss";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
      <div class="product">
                  <div class="photo">
                    <img
                      src=${el.image}
                      alt=""
                    />
                    <div class="icons">
                      <div class="icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <div class="text">
                    <p class="first-p">${el.name}</p>
                    <p class="second-p">${el.type}</p>
                    <span>$${el.price}</span>
                  </div>
                </div>`);
  });
});
organic.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Organic";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
        <div class="product">
                    <div class="photo">
                      <img
                        src=${el.image}
                        alt=""
                      />
                      <div class="icons">
                        <div class="icon">
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <p class="first-p">${el.name}</p>
                      <p class="second-p">${el.type}</p>
                      <span>$${el.price}</span>
                    </div>
                  </div>`);
  });
});
perfumes.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    console.log(elem.type);
    return elem.type === "Perfumes";
  });
  result.forEach((el, i) => {
    return (productSection.innerHTML += `
          <div class="product">
                      <div class="photo">
                        <img
                          src=${el.image}
                          alt=""
                        />
                        <div class="icons">
                          <div class="icon">
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-regular fa-heart"></i>
                          </div>
                        </div>
                      </div>
                      <div class="text">
                        <p class="first-p">${el.name}</p>
                        <p class="second-p">${el.type}</p>
                        <span>$${el.price}</span>
                      </div>
                    </div>`);
  });
});

select.addEventListener("change", function (e) {
  console.log(select.value);
  if (select.value == "lowtohigh") {
    products.sort((a, b) => a.price - b.price);
  } else if (select.value == "hightolow") {
    products.sort((a, b) => b.price - a.price);
  }
  productSection.innerHTML = "";
  products.forEach((el, i) => {
    return (productSection.innerHTML += `
<div class="product">
            <div class="photo">
              <img
                src=${el.image}
                alt=""
              />
              <div class="icons">
                <div class="icon">
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
            <div class="text">
              <p class="first-p">${el.name}</p>
              <p class="second-p">${el.type}</p>
              <span>$${el.price}</span>
            </div>
          </div>`);
  });
});

let commentText = document.querySelector(".comment-text");
let userName = document.querySelector(".user-name");
let userPhoto = document.querySelector(".user-photo");
let allComments = document.querySelector(".comments");
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  let nickName = userName.value;
  let text = commentText.value;
  let photo = userPhoto.value;
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let day = new Date().getDate();
  e.preventDefault();
  if (text) {
    allComments.innerHTML += `
      <div class="comment">
              <div class="photo">
              <img src="../assets/images/${
                photo ? photo.split("\\")[2] : "user.jfif"
              }"    alt="">
              </div>
              <div class="content-comment">
                <p class="name">${nickName ? nickName : "User name"}</p>
                <p class="time">${day}/${month}/${year}</p>
                <span
                  >${text}
                </span>
                </div>
              </div>
      `;
  } else {
    alert("Please enter your comment!");
  }
  userName.value = "";
  commentText.value = "";
  photo.value = "";
});
