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
