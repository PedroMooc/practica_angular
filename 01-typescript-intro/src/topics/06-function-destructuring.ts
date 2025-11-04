interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}
const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

const shoppingCart = [phone, tablet];
const tax = 0.15;