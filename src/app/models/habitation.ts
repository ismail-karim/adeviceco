import { Address } from "./address";

export class Habitation {
    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: number;
    public address: Address;
    public surface: number;
    public homeType: string;

    constructor(firstname: string, lastaname: string, email: string, phone: number, address: Address, surface: number, homeType: string)
    {
        this.firstname = firstname,
        this.lastname = lastaname,
        this.email = email,
        this.phone = phone,
        this.address = address,
        this.surface = surface,
        this.homeType = homeType
    }
}
