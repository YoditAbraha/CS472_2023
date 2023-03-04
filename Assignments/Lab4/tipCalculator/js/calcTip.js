

function calculateTip(){
    let subTotal = parseFloat(document.getElementById("subTotal").value)
    let tip = parseFloat(document.getElementById("tip").value)

    //calculate tip amount
    let tipAmount = subTotal*(tip/100)
    let total = subTotal + tipAmount

    // update the tip amount input field
  return document.getElementById("total").textContent = "$" + total.toFixed(2);
}

