function itemTotal(elementId) {
  const TotalField = document.getElementById(elementId);
  const TotalString = TotalField.innerText;
  const Total = parseInt(TotalString);
  return Total;
}

// calculate subtotal 
function subtotal() {
  const subTotalField = document.getElementById("sub-total");
  const phoneTotal = itemTotal("phone-total");
  const caseTotal = itemTotal("case-total");
  subTotalField.innerText = phoneTotal + caseTotal;
}

// calculate tax 
function tax() {
    const taxField = document.getElementById("tax-total");
    const tax = document.getElementById("sub-total").innerText * 0.10;
    const taxString = tax.toFixed(2);
    const taxTotal = parseFloat(taxString);
    taxField.innerText = taxTotal;
}

// calculate total 
function total() {
    const TotalField = document.getElementById("total");
    const subTotalField = document.getElementById("sub-total").innerText;
    const subTotal = parseFloat(subTotalField);
    const taxField = document.getElementById("tax-total").innerText;
    const tax = parseFloat(taxField);
    const total = subTotal + tax;
    TotalField.innerText = total;
}


let clearBtn = document.getElementsByClassName("remove");
for (const clear of clearBtn) {
    clear.addEventListener("click", function(){
        clear.parentElement.parentElement.parentElement.remove();
    })
}