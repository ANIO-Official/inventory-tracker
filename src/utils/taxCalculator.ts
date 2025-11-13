import product from "../models/Product";

export default function calculateTax(Product:product):number{
    return Product.getPriceWithTax()
}