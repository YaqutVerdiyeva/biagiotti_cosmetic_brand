let BASE_URL = `http://localhost:3000`;

let allproducts = document.querySelector(".allproducts");
let cosmetic = document.querySelector(".cosmetic");
let facemask = document.querySelector(".facemask");
let foundation = document.querySelector(".foundation");
let lipgloss = document.querySelector(".lipgloss");
let organic = document.querySelector(".organic");
let perfumes = document.querySelector(".perfumes");
let productSection = document.querySelector(".products");
let select = document.querySelector(".select");
let moneySelect = document.querySelector(".money");
let searchInput = document.querySelector(".search-input");
let commentText = document.querySelector(".comment-text");
let userName = document.querySelector(".user-name");
let userPhoto = document.querySelector(".user-photo");
let allComments = document.querySelector(".comments");
let submitBtn = document.querySelector(".submit-btn");
let products = [];

async function getAllProducts() {
  let res = await axios(`${BASE_URL}/products`);
  let data = res.data;
  products = data;
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
                      <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                      <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart "></i>
                    </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.price} $</span>
                </div>
              </div>`);
  });
}
getAllProducts();
allproducts.addEventListener("click", () => {
  productSection.innerHTML = "";
  getAllProducts();
  moneySelect.addEventListener("change", function (e) {
    if (moneySelect.value == "azn") {
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
                      <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                      <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
cosmetic.addEventListener("click", (e) => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
    return elem.type === "Cosmetic";
  });
  productSection.innerHTML = "";
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
                  <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                  <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
            <div class="text">
              <p class="first-p">${el.name}</p>
              <p class="second-p">${el.type}</p>
              <span>${el.price} $</span>
            </div>
          </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
facemask.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
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
                  <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                  <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.price} $</span>
                </div>
              </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
foundation.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
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
                  <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                  <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.price} $</span>
                </div>
              </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
lipgloss.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
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
                    <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                    <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                  </div>
                    </div>
                  </div>
                  <div class="text">
                    <p class="first-p">${el.name}</p>
                    <p class="second-p">${el.type}</p>
                    <span>${el.price} $</span>
                  </div>
                </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
organic.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
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
                      <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                      <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                    </div>
                      </div>
                    </div>
                    <div class="text">
                      <p class="first-p">${el.name}</p>
                      <p class="second-p">${el.type}</p>
                      <span>${el.price} $</span>
                    </div>
                  </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    }
  });
});
perfumes.addEventListener("click", () => {
  productSection.innerHTML = "";
  const result = products.filter((elem) => {
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
                        <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                        <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                      </div>
                        </div>
                      </div>
                      <div class="text">
                        <p class="first-p">${el.name}</p>
                        <p class="second-p">${el.type}</p>
                        <span>${el.price} $</span>
                      </div>
                    </div>`);
  });
  moneySelect.addEventListener("change", function (e) {
    console.log(select.value);
    if (moneySelect.value == "azn") {
      productSection.innerHTML = "";
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
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
      });
    } else if (moneySelect.value == "usd") {
      productSection.innerHTML = "";
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
                  <span>${el.price} $ </span>
                </div>
              </div>`);
      });
    } else {
    }
  });
});
select.addEventListener("change", function () {
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
              <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
              <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
            </div>
              </div>
            </div>
            <div class="text">
              <p class="first-p">${el.name}</p>
              <p class="second-p">${el.type}</p>
              <span>${el.price} $</span>
            </div>
          </div>`);
  });
});
moneySelect.addEventListener("change", function () {
  console.log(select.value);
  if (moneySelect.value == "azn") {
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
                  <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                  <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.priceAzn} AZN </span>
                </div>
              </div>`);
    });
  } else {
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
                  <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                  <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                </div>
                  </div>
                </div>
                <div class="text">
                  <p class="first-p">${el.name}</p>
                  <p class="second-p">${el.type}</p>
                  <span>${el.price} $ </span>
                </div>
              </div>`);
    });
  }
});
searchInput.addEventListener("input", function () {
  let newProducts = products.filter((el) => {
    return el.name
      .toLocaleLowerCase()
      .includes(searchInput.value.toLocaleLowerCase());
  });
  productSection.innerHTML = "";
  newProducts.forEach((el, i) => {
    return (productSection.innerHTML += `
      <div class="product">
                  <div class="photo">
                    <img
                      src=${el.image}
                      alt=""
                    />
                    <div class="icons">
                    <div class="icon">
                    <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                    <i onclick="addWishlist(${el.id})" class="fa-regular fa-heart"></i>
                  </div>
                    </div>
                  </div>
                  <div class="text">
                    <p class="first-p">${el.name}</p>
                    <p class="second-p">${el.type}</p>
                    <span>${el.price} $</span>
                  </div>
                </div>`);
  });
});
async function getAllComments() {
  let res = await axios(`${BASE_URL}/comments`);
  let data = res.data;
  data.forEach((el, i) => {
    return (allComments.innerHTML += `
    <div class="comment">
            <div class="photo">
            <img src=" ../assets/images/${
              el.photo.split("\\")[2] ? el.photo.split("\\")[2] : "user.jfif"
            }"    alt="">
            </div>
            <div class="content-comment">
              <p class="name">${el.name ? el.name : "User name"}</p>
              <p class="time">${el.time} </p>
              <span
                >${el.comment}
              </span>
              </div>
            </div>
    `);
  });
}
getAllComments();
submitBtn.addEventListener("click", (e) => {
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let day = new Date().getDate();
  e.preventDefault();
  if (commentText) {
    axios.post(`${BASE_URL}/comments`, {
      name: userName.value,
      photo: userPhoto.value,
      comment: commentText.value,
      time: `${day}/${month}/${year}`,
    });
  } else {
    alert("Please enter your comment!");
  }
});
async function addBasket(userId) {
  let res = await axios(`${BASE_URL}/products/${userId}`);
  let obj = await res.data;
  let response = await axios(`${BASE_URL}/basket/`);
  let data = await response.data;
  let selectedProduct = data.find((item) => item.id == userId);
  if (!data.includes(selectedProduct)) {
    axios.post(`${BASE_URL}/basket`, obj);
  } else {
    axios.patch(`${BASE_URL}/products/${userId}`, {
      count: obj.count + 1,
    });
    axios.patch(`${BASE_URL}/basket/${userId}`, {
      count: obj.count + 1,
    });
  }
}
async function addWishlist(userId) {
  let res = await axios(`${BASE_URL}/products/${userId}`);
  let obj = await res.data;
  let response = await axios(`${BASE_URL}/wishlist/`);
  let data = await response.data;
  let selectedProduct = data.find((item) => item.id == userId);
  if (!data.includes(selectedProduct)) {
    axios.post(`${BASE_URL}/wishlist`, obj);
  } else {
    alert("Already added!");
  }
}
