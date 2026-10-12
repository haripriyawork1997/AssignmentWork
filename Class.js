/*
class Product{
    constructor(name,price,category){
        this.name = name
        this.price = price
        this.category = category
    }

    displayProduct(){
        console.log(this.name + " is available")

    }

    addToCart(){
    console.log(this.name + " is added to cart")
    }
  }
    let product1 = new Product("laptop",50000,"Electronics")
    console.log(product1.name)
    console.log(product1.price)
    console.log(product1.category)

    product1.displayProduct()
    product1.addToCart() */
/*
    console.log("Washing machine started");

setTimeout(() => {
    console.log("Washing completed - Clothes are ready");
}, 3000);
console.log("You can do other work");
*/

let orderStatus = "Order placed";
console.log(orderStatus);
setTimeout(() => {
    orderStatus = "Food is ready";
    console.log(orderStatus);
}, 4000);
console.log("You can continue doing other work");

