import { Energy } from "./energy";

export class Vehicule {

    public marque: string;
    public immat: string;
    public model: string;
    public energy: string;

    constructor(marque: string, immat: string, model: string,energy: string){
        this.marque = marque;
        this.immat = immat;
        this.model = model;
        this.energy = energy;
    }
}
