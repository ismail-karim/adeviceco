import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.scss']
})
export class PaimentComponent implements OnInit {

    public product: Array<any> = [];
  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
      this.getItem();
  }

  //récupérer le tableau 
  //Effectuer le paiement 
  //Effacer le tableau 
  //Rediriger vers la page de commandes
  //Avec l'état d'avancement de la commande

  getItem()
  { 
      this.product = this.cartService.getItems();
      console.log('product', this.product);
  }
}
