const products = [
  { id: 1, name: "Apple iPhone 15", price: 79999, img: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg" },
  { id: 2, name: "Samsung Galaxy S24", price: 74999, img: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" },
  { id: 3, name: "Sony Headphones WH-1000XM5", price: 29999, img: "https://m.media-amazon.com/images/I/61d7Dcn-sxL._SL1500_.jpg" },
  { id: 4, name: "Apple MacBook Air M2", price: 114999, img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" },
  { id: 5, name: "Nike Air Max Shoes", price: 8999, img: "https://m.media-amazon.com/images/I/61xq5oJ9x8L._UL1500_.jpg" },
  { id: 6, name: "Fossil Men’s Watch", price: 10999, img: "https://m.media-amazon.com/images/I/71lQFv2eqtL._UL1500_.jpg" },
  { id: 7, name: "OnePlus Nord CE 4", price: 27999, img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg" },
  { id: 8, name: "Boat Bluetooth Speaker", price: 1999, img: "https://m.media-amazon.com/images/I/61xXrA2xOoL._SL1500_.jpg" },
  { id: 9, name: "Apple Watch SE", price: 29999, img: "https://m.media-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg" },
  { id: 10, name: "Dell Inspiron Laptop", price: 63999, img: "https://m.media-amazon.com/images/I/71pFh8lD7bL._SL1500_.jpg" },
  { id: 11, name: "Logitech MX Master 3S Mouse", price: 7999, img: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SL1500_.jpg" },
  { id: 12, name: "HP Pavilion Gaming Laptop", price: 81999, img: "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg" },
  { id: 13, name: "Canon EOS 1500D DSLR", price: 44999, img: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" },
  { id: 14, name: "GoPro HERO11 Camera", price: 51999, img: "https://m.media-amazon.com/images/I/71TxU3CrZRL._SL1500_.jpg" },
  { id: 15, name: "Samsung 32\" Monitor", price: 15499, img: "https://m.media-amazon.com/images/I/71K6GgYcEwL._SL1500_.jpg" },
  { id: 16, name: "Mi Power Bank 20000mAh", price: 1899, img: "https://m.media-amazon.com/images/I/61k8jzI0r4L._SL1500_.jpg" },
  { id: 17, name: "Amazon Echo Dot (5th Gen)", price: 5499, img: "https://m.media-amazon.com/images/I/61KIy6gX-CL._SL1500_.jpg" },
  { id: 18, name: "Realme Buds Air 5", price: 3999, img: "https://m.media-amazon.com/images/I/61LUjz6M7GL._SL1500_.jpg" },
  { id: 19, name: "Asus ROG Strix G17", price: 124999, img: "https://m.media-amazon.com/images/I/81mLxUotZVL._SL1500_.jpg" },
  { id: 20, name: "Sony PS5 Console", price: 55999, img: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg" },
  { id: 21, name: "TCL 43-inch 4K Smart TV", price: 28999, img: "https://m.media-amazon.com/images/I/81oAOzMufSL._SL1500_.jpg" },
  { id: 22, name: "Samsung Refrigerator 253L", price: 27499, img: "https://m.media-amazon.com/images/I/71pL-y6sdBL._SL1500_.jpg" },
  { id: 23, name: "IFB 6kg Washing Machine", price: 24999, img: "https://m.media-amazon.com/images/I/71bq4bkk2VL._SL1500_.jpg" },
  { id: 24, name: "Philips Air Fryer", price: 8999, img: "https://m.media-amazon.com/images/I/71b+Yt9H58L._SL1500_.jpg" },
  { id: 25, name: "Prestige Induction Stove", price: 4999, img: "https://m.media-amazon.com/images/I/61PQLguk2zL._SL1500_.jpg" },
  { id: 26, name: "Lenovo Tab M10", price: 17999, img: "https://m.media-amazon.com/images/I/61W0PjNqOEL._SL1500_.jpg" },
  { id: 27, name: "Fire-Boltt Smartwatch", price: 1999, img: "https://m.media-amazon.com/images/I/61R8PCZx1FL._SL1500_.jpg" },
  { id: 28, name: "JBL Tune 720BT Headphones", price: 5999, img: "https://m.media-amazon.com/images/I/61QYpR1XfvL._SL1500_.jpg" },
  { id: 29, name: "Oppo Reno 12 5G", price: 34999, img: "https://m.media-amazon.com/images/I/81-RQBLG7kL._SL1500_.jpg" },
  { id: 30, name: "Acer Aspire 5 Laptop", price: 59999, img: "https://m.media-amazon.com/images/I/61mFes9DQlL._SL1500_.jpg" }
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
let cart = [];

// Display all products
function displayProducts() {
  products.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

// Update cart
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})" style="background:#e74c3c;color:white;border:none;padding:5px 10px;border-radius:5px;">Remove</button>
    `;
    cartList.appendChild(li);
  });
  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("✅ Checkout successful! Thank you for shopping.");
    cart = [];
    updateCart();
  }
});

displayProducts();
