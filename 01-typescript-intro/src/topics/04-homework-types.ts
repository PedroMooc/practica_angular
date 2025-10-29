/**
 == código de TypeScript ==
 */
interface SuperHero  {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}
interface Address {
    street: string;
    coutry: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        coutry: 'USA',
        city: 'New York'
    },
    showAddress() {
        return this.name +", " + this.address.city + ", " + this.address.coutry;
    }
}

const address = superHeroe.showAddress();
console.log(address);