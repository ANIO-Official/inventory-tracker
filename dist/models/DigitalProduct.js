import Product from "./Product.js";
export default class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    //override
    getPriceWithTax() {
        return this.price; // No tax
    }
    getFileSize() {
        return `${this.fileSize} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map