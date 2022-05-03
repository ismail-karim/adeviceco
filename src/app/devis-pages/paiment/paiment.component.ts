import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.scss']
})
export class PaimentComponent implements OnInit {

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  //récupérer le tableau 
  //Effectuer le paiement 
  //Effacer le tableau 
  //Rediriger vers la page de commandes
  //Avec l'état d'avancement de la commande
}
