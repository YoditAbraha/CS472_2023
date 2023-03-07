
// const button = document.querySelector('.btn')

// button.onclick = ()=>{

// }
const invoice = {
    invoice_number: 10,
    item:{
        itemNum: 1001,
        itemName: "item1",
    },
    printItem(){
        console.log(this.invoice_number)
    }


}
invoice.printItem();

// create an object
const invoice1 = {};
// add a property
invoice1.taxRate = 0.0875;
// add a method
//function expression
invoice1.getSalesTax = function(subtotal){
return (subtotal * this.taxRate);
};
// function invoice.naodi(subtotal){
//     return (subtotal * this.taxRate);
// }
