interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}
interface TaxCalculatorOptions {
    tax: number;
    products: Product[];
}

function taxCalculator(options: TaxCalculatorOptions): [number, number]{
    let total = 0;

    const {tax, products} = options;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [ total, total*tax ];
}



const shopingCart = [phone, tablet];
const tax = 0.15;


const [total, totalTax] = taxCalculator({
    products: shopingCart,
    tax: tax 
});


console.log('Total: ', total);
console.log('Tax: ', totalTax);