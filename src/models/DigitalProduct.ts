import Product from "./Product";

export default class DigitalProduct extends Product {
    fileSize: number

    constructor (sku:string, name:string, price:number, fileSize:number){
        super(sku,name,price)
        this.fileSize = fileSize
    }

    //override
    getPriceWithTax(): number {
        return this.price // No tax
    }

    getFileSize():string{
        return `${this.fileSize} MB`
    }
}