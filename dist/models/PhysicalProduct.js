import Product from "./Product.js";
export default class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    //override
    getPriceWithTax() {
        return this.price * (1 + 0.10); //10% tax
    }
    getWeight() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map