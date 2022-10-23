import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

    public firstname!: string;
    public lastname!: string;
    public email!: string;
    public phone!: number;
    public address!: Address;
    public surface!: number;
    public homeType!: string;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Verifie et envoie le formulaire
   */
  public submitForm()
  {

  }
}
