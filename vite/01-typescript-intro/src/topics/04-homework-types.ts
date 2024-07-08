interface SuperHero{
    name: string;
    age: number;
    address: Address;

    showAddress: () => String;
}

interface Address{
    street: string,
    country: string,
    city: string
}


const superHero: SuperHero = {
    name: 'SpiderMan',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' 
        + this.address.country;
    }
}

const address = superHero.showAddress();
console.log(address);