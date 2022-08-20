// update phone number function
function updatePhone(isIncrease) {
  const phoneField = document.getElementById("phn-field");
  const phoneFieldString = phoneField.value;
  const phoneFieldNumber = parseInt(phoneFieldString);

  let newPhoneFieldValue;

  if (isIncrease === true) {
    newPhoneFieldValue = phoneFieldNumber + 1;
    if (newPhoneFieldValue > 0) {
      document.getElementById("phone-minus-btn").disabled = false;
    }
  } else {
    newPhoneFieldValue = phoneFieldNumber - 1;
    if (newPhoneFieldValue == 0) {
      document.getElementById("phone-minus-btn").disabled = true;
    }
  }

  phoneField.value = newPhoneFieldValue;
  return newPhoneFieldValue;
}

function phoneTotalPrice(newPhoneFieldValue) {
  const phoneTotalField = document.getElementById("phone-total");

  const phoneTotalPrice = newPhoneFieldValue * 1219;
  phoneTotalField.innerText = phoneTotalPrice;
}

// For plus button
document
  .getElementById("phone-plus-btn")
  .addEventListener("click", function () {
    const newPhoneFieldValue = updatePhone(true);
    phoneTotalPrice(newPhoneFieldValue);
    subtotal();
    tax();
    total();
  });

// For minus button
document
  .getElementById("phone-minus-btn")
  .addEventListener("click", function () {
    const newPhoneFieldValue = updatePhone(false);
    phoneTotalPrice(newPhoneFieldValue);
    subtotal();
    tax();
    total();
  });
