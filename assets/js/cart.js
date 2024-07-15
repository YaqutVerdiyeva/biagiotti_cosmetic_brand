let BASE_URL = `http://localhost:3000`;
let cartProducts = document.querySelector(".cart-products");
let total = document.querySelector(".cart-total");

async function getAllProducts() {
  let res = await axios(`${BASE_URL}/basket`);
  let data = res.data;
  data.forEach((el, i) => {
    return (cartProducts.innerHTML += `
    <tr>
    <td class="delete-item" onClick="deleteItem(${el.id})"><div>x</div></td>
    <td class="item-photo-text">
      <div class="item-text">
        <img
          width="60px"
          height="100%"
          src=${el.image}
          alt=""
        />${el.name}
      </div>
    </td>
    <td class="price"><div>$${el.price}.00</div></td>
    <td class="count">
      <div>
        <button class="decrease-btn" onClick="decBtn(${el.id}, ${
      el.count
    })">-</button>
        <div class="item-counttt">${el.count}</div>
        <button class="increase-btn" onClick="incBtn(${el.id}, ${
      el.count
    })">+</button>
      </div>
    </td>
    <td class="subtotal"><div>$${el.price * el.count}.00</div></td>
  </tr>`);
  });
}
getAllProducts();
async function decBtn(id, count) {
  if (count > 1) {
    axios.patch(`${BASE_URL}/basket/${id}`, {
      count: count - 1,
    });
    axios.patch(`${BASE_URL}/products/${id}`, {
      count: count - 1,
    });
  }
}
function incBtn(id, count) {
  axios.patch(`${BASE_URL}/basket/${id}`, {
    count: count + 1,
  });
  axios.patch(`${BASE_URL}/products/${id}`, {
    count: count + 1,
  });
}
function deleteItem(id) {
  axios.delete(`${BASE_URL}/basket/${id}`);
  axios.patch(`${BASE_URL}/products/${id}`, {
    count: 1,
  });
}
async function getAllProductsSum() {
  let res = await axios(`${BASE_URL}/basket`);
  let data = res.data;
  products = data;
  let sum = 0;
  for (let i of products) {
    let sumProduct = i.price * i.count;
    sum = sum + sumProduct;
  }
  total.innerHTML = `TOTAL:  $${sum}`;
}
getAllProductsSum();
