import product from "../models/Product";

function calculateTax(Product:product):number{
    return Product.getPriceWithTax()
}