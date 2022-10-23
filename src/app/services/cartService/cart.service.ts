import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: Array<Product> = [];

    constructor() { }
  
    /**
     * Method appends a product to an array of items
     * @param product 
     */
    addToCart(product: Product)
    {
      this.items.push(product);
    }
  
  
    /**
     * 
     * @returns Method return item
     */
    getItems()
    {
        if(this.items.length === 0)
        {
          throw new Error('le penier est vide');
        }
        else
        {
            return this.items;
        }
    }
  
    /**
     * methode returns an empty array of items
     * @returns 
     */
    clearCart()
    {
        this.items = [];
        return this.items;
    }
}
