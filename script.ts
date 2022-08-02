export{}

interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain [] = [{name:"Kilimanjaro", height:19341}, {name:"Everset", height: 29029}, {name:"Denali", height: 20310}]

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let highestmountain: Mountain = mountains[0];
    mountains.forEach((m:Mountain) =>{
        if(m.height > highestmountain.height){
            highestmountain = m;
        }
    });


    return highestmountain.name;
}

console.log(findNameOfTallestMountain(mountains))

interface Product {
    name: string;
    price: number;
}
let products: Product [] = [{name:"Pen", price:3}, {name:"Coffee", price:2}, {name:"Water", price:1}]
let average: number = 0;
function calcAverageProductPrice(products:Product[]):number{

    products.forEach((p:Product) =>{
       average += p.price
    });
    return average / products.length
}

console.log(calcAverageProductPrice(products))

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product: {name: "Motor", price: 10.00}, quantity: 10},
    {product: {name: "Sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20},
]
function calcInventoryValue(inventory:InventoryItem[]):number{
let total: number = 0;
    inventory.forEach((p:InventoryItem) =>{
      total += p.product.price * p.quantity 
    });
    return total;
}   
console.log(calcInventoryValue(inventory))