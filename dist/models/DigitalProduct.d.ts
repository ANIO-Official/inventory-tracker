import Product from "./Product";
export default class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    getFileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map