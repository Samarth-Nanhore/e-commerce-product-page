// Item Quantity Functionalities

const quantityIncrementBtn = document.querySelector("img.plus-btn");
const quantityDecrementBtn = document.querySelector("img.minus-btn");
const quantityValueElement = document.querySelector("p.quantity-value");

quantityIncrementBtn.addEventListener("click", incrementProductQuantity);

function incrementProductQuantity() {
  let quantityValue = convertTextContentToNumber(
    quantityValueElement.textContent
  );

  if (quantityValue > 0 && quantityValue < 5) {
    let addOne = quantityValue + 1;
    quantityValueElement.textContent = `${addOne}`;
  }

  changeBtnStyle(quantityValue);
}

function convertTextContentToNumber(string) {
  // string must be value that can convert into number
  return Number(string);
}

function changeBtnStyle(quantityValue) {
  // this function change style of quantity btn only
  if (quantityValue === 5) {
    quantityIncrementBtn.style.cssText = "cursor: not-allowed; ";
  } else if (quantityValue === 1) {
    quantityDecrementBtn.style.cssText = "cursor: not-allowed; ";
  } else if (quantityValue < 5 && quantityValue > 1) {
    quantityIncrementBtn.style.cssText = "cursor: pointer;";
    quantityDecrementBtn.style.cssText = "cursor: pointer;";
  }
}

quantityDecrementBtn.addEventListener("click", decrementProductQuantity);

function decrementProductQuantity() {
  let quantityValue = convertTextContentToNumber(
    quantityValueElement.textContent
  );

  if (quantityValue > 1) {
    let subOne = quantityValue - 1;
    quantityValueElement.textContent = `${subOne}`;
  }
  changeBtnStyle(quantityValue);
}

// Add To Cart Functionalities

const cartIconElement = document.querySelector("div.cart-icon");
const addToCartBtnElement = document.querySelector("div.addToCartBtn");

addToCartBtnElement.addEventListener("click", addItemToCart);

function addItemToCart() {
  addNotifyToCartIcon();
}

function addNotifyToCartIcon() {
  let quantityValue = convertTextContentToNumber(
    quantityValueElement.textContent
  );
  let newDivElement = document.createElement("div");
  let newParagraphElement = document.createElement("p");
  newParagraphElement.innerText = `${quantityValue}`;
  newDivElement.appendChild(newParagraphElement);
  newDivElement.classList.add("notification");
  cartIconElement.appendChild(newDivElement);
}

// cart-icon event

cartIconElement.addEventListener("click", addCartUI);

let cartInfoDivEle; // imp space to update Cart UI state
let emptyCartTitleElement;

function addCartUI() {
  let cartContainerDivEle = document.createElement("div");
  cartContainerDivEle.classList.add("cart-container");

  let cartTitleDivEle = document.createElement("div");
  let cartTitle = document.createElement("p");
  cartTitle.innerText = "Cart";
  let newHrElement = document.createElement("hr");
  cartTitleDivEle.appendChild(cartTitle);
  cartTitleDivEle.appendChild(newHrElement);

  cartInfoDivEle = document.createElement("div");
  emptyCartTitleElement = document.createElement("p");
  emptyCartTitleElement.innerText = "Your cart is empty.";
  cartInfoDivEle.appendChild(emptyCartTitleElement);

  cartContainerDivEle.appendChild(cartTitleDivEle);
  cartContainerDivEle.appendChild(cartInfoDivEle);

  cartIconElement.appendChild(cartContainerDivEle);
}
