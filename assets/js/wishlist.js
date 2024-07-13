let BASE_URL = `http://localhost:3000`;

let wishlistProducts = document.querySelector(".wishlist-products");
let countProducts = document.querySelector(".count-product");

let products = [];
async function getAllProducts() {
  let res = await axios(`${BASE_URL}/wishlist`);
  let data = res.data;
  products = data;
  countProducts.innerHTML = `Count of products: ${products.length}`;
  products.forEach((el, i) => {
    return (wishlistProducts.innerHTML += `
    <div class="product">
                <div class="photo">
                  <img
                    src=${el.image}
                    alt=""
                  />
                  <div class="icons">
                    <div class="icon">
                      <i onclick="addBasket(${el.id})" class="fa-solid fa-plus"></i>
                      <i onclick="removeBasket(${el.id})" class="fa-solid fa-minus"></i>
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
async function addBasket(userId) {
  let res = await axios(`${BASE_URL}/products/${userId}`);
  let obj = await res.data;
  console.log(obj);
  axios.post(`${BASE_URL}/basket`, obj);
}

function removeBasket(id) {
  axios.delete(`${BASE_URL}/wishlist/${id}`);
}
