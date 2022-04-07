import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssuranceType } from 'src/app/models/assurance-type';
import { Auto } from 'src/app/models/auto';
import { Energy } from 'src/app/models/energy';
import { ParkType } from 'src/app/models/park-type';
import { Role } from 'src/app/models/role';
import { Vehicule } from 'src/app/models/vehicule';

@Component({
  selector: 'app-auto-moto',
  templateUrl: './auto-moto.component.html',
  styleUrls: ['./auto-moto.component.scss']
})
export class AutoMotoComponent implements OnInit {

  public parkType: Array<string> = [ParkType.CloseGarage, ParkType.OpenGarage, ParkType.PublicStreet];
  public assuranceType: Array<string> = [AssuranceType.ToutRisque, AssuranceType.TierMax];
  public carburant: Array<string> = [Energy.Diesel, Energy.Essence, Energy.GPL, Energy.Electrique, Energy.Hybride];
  public statut: Array<string> = [Role.Particulier, Role.Professionnel];

  public raison: string ='';
  public firstName: string = '';
  public lastName: string ='';
  public birthday: Date = new Date();
  public licenceDate: Date = new Date();
  public marque: string = '';
  public immat: string = '';
  public model: string = '';
  public energy: string = '';
  public isPro: string = '';
  public isInsured: boolean = false;
  public bonus: number = 0;
  public assurance: string = '';
  public email: string = '';
  public phone: number = 0;
  public parking:string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    var vehicule: Vehicule = new Vehicule(this.marque, this.immat, this.model, this.energy);
    var devisAuto: Auto = new Auto(this.firstName, this.lastName, this.isPro, this.birthday, this.licenceDate, this.isInsured, this.bonus, vehicule, this.parking, this.assurance, this.email, this.phone);
    //transmettre les informations en JSON au serveur avec POST API
    console.log('notre objet :', devisAuto);
    //Rediriger le client vers la page de paiment 
  }

}
