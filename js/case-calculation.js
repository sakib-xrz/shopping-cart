// update case number function
function updateCase(isIncrease) {
  const caseField = document.getElementById("case-field");
  const caseFieldString = caseField.value;
  const caseFieldNumber = parseInt(caseFieldString);

  let newCaseFieldValue;

  if (isIncrease === true) {
    newCaseFieldValue = caseFieldNumber + 1;
    if (newCaseFieldValue > 0) {
      document.getElementById("case-minus-btn").disabled = false;
    }
  } else {
    newCaseFieldValue = caseFieldNumber - 1;
    if (newCaseFieldValue == 0) {
      document.getElementById("case-minus-btn").disabled = true;
    }
  }

  caseField.value = newCaseFieldValue;

  return newCaseFieldValue;
}

function caseTotalPrice(newCaseFieldValue) {
    const caseTotalField = document.getElementById("case-total");

    const caseTotalPrice = newCaseFieldValue * 59;
    caseTotalField.innerText = caseTotalPrice;
}

// For plus button
document
  .getElementById("case-plus-btn")
  .addEventListener("click", function () {
    const newCaseFieldValue = updateCase(true);
    caseTotalPrice(newCaseFieldValue);
    subtotal()
    tax()
    total()
});

// For minus button
document
  .getElementById("case-minus-btn")
  .addEventListener("click", function () {
    const newCaseFieldValue = updateCase(false);
    caseTotalPrice(newCaseFieldValue);
    subtotal()
    tax()
    total()
  });
