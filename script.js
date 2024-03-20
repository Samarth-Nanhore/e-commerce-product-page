const quantityIncrementBtn = document.querySelector("img.plus-btn");
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
  } else if (quantityValue < 5) {
    quantityIncrementBtn.string.cssText = "cursor: pointer;";
  }
}
