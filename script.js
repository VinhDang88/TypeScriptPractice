"use strict";
exports.__esModule = true;
var mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everset", height: 29029 }, { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(mountains) {
    var highestmountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height > highestmountain.height) {
            highestmountain = m;
        }
    });
    return highestmountain.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [{ name: "Pen", price: 3 }, { name: "Coffee", price: 2 }, { name: "Water", price: 1 }];
var average = 0;
function calcAverageProductPrice(products) {
    products.forEach(function (p) {
        average += p.price;
    });
    return average / products.length;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    { product: { name: "Motor", price: 10.00 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(inventory) {
    var total = 0;
    inventory.forEach(function (p) {
        total += p.product.price * p.quantity;
    });
    return total;
}
console.log(calcInventoryValue(inventory));
