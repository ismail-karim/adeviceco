import { Vehicule } from "./vehicule";

export class Auto {

    public firstName: string;
    public lastName: string;
    public statut: string;
    public birthday: Date;
    public licenceDate: Date;
    public isInsured: boolean;
    public bonus: number;
    public vehicule: Vehicule;
    public parkType: string;
    public assuranceType: string;
    public email: string;
    public phone: number;
    public raison?: string;

    constructor(
        firstname: string, 
        lastname: string, 
        statut: string,
        birthday: Date,
        licenceDate: Date,
        isInsured: boolean,
        bonus: number,
        vehicule: Vehicule,
        parkType: string,
        assuranceType: string,
        email: string,
        phone: number)
        {
            this.firstName = firstname;
            this.lastName = lastname;
            this.statut = statut;
            this.birthday = birthday;
            this.licenceDate = licenceDate;
            this.isInsured = isInsured;
            this.bonus = bonus;
            this.vehicule = vehicule;
            this.parkType = parkType;
            this.assuranceType = assuranceType;
            this.email = email;
            this.phone = phone
        }
}
