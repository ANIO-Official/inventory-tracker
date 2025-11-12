import Product from "./Product";

export default class PhysicalProduct extends Product {
    weight: number

    constructor (sku:string, name:string, price:number, weight:number){
        super(sku,name,price)
        this.weight = weight
    }

    //override
    getPriceWithTax(): number {
        return this.price * (1 + 0.10) //10% tax
    }

    getWeight():string{
        return `${this.weight} kg`
    }
}