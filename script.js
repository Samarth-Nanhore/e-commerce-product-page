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
}

function convertTextContentToNumber(string) {
  // string must be value that can convert into number
  return Number(string);
}
