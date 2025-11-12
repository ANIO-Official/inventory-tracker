class Product {
    sku: string
    name: string
    price: number

    constructor(sku:string, name: string, price:number){
        this.sku = sku
        this.name = name
        this.price = price
    }

    displayDetails():string{
        return `${this.name} SKU(${this.sku}) is ${this.price}.`
    }
    getPriceWithTax(tax:number):number{
        return this.price + tax
    }
}