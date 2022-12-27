import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreDatasService {

  private  app =  initializeApp(environment.firebase)
  private  db = getFirestore(this.app);
  constructor(
  ) { }


  async storeNewUser(user: User)
  {
    try {
      await addDoc(collection(this.db, "Users"), Object.assign({}, user));
    } catch (error) {
      console.log('Error', error);
    }
    
  }
}
