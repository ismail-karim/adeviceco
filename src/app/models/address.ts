export class Address {

    public number: number;
    public street: string;
    public city: string;
    public zipCode: number;

    constructor(number: number, street: string, city: string, zipCode: number)
    {
        this.number = number;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}
