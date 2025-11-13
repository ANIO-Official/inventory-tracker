import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";
import calculateTax from "./utils/taxCalculator.js";
const clearWaterBottle = new PhysicalProduct("SK257SR", "Clear Water Bottle", 1.99, 0.5);
const how2MakeMuffins = new DigitalProduct("SK2567SG", "How 2 Make Muffins: The Sequel", 11.49, 10.53);
const products = [clearWaterBottle, how2MakeMuffins];
function listProducts() {
    for (let i of products) {
        console.log(`About this product ${i.displayDetails()} It's price plus tax is ${calculateTax(i)}.`);
    }
}
listProducts();
//# sourceMappingURL=main.js.map