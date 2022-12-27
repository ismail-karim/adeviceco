import { Inject, Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { getAuth, sendSignInLinkToEmail,createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { StoreDatasService } from '../server-data/store-datas.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  app =  initializeApp(environment.firebase);
  private auth = getAuth();
  private  db = getFirestore(this.app);

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private storeDatas: StoreDatasService
  ) { }



  /**
   * 
   * @param user 
   * @param password 
   */
  async createNewUserAccount(user: User, password: string)
  {
    try {
      createUserWithEmailAndPassword(this.auth ,user.email, password).then((result) => {
        console.log('result ->', result);
        sendEmailVerification(result.user);
        this.storeDatas.storeNewUser(user);
      });
    } catch (error) {
      console.log('Error', error);
    }
    
  }


  /**
   * 
   * @param email 
   * @param password 
   */
  signInWithEmailAndPassword(email: string, password: string)
  {
    try {
     signInWithEmailAndPassword(this.auth, email, password).then((result) => {
      // localStorage.setItem('user', result.providerId);
      // sessionStorage.setItem('userToken', result.user);
        console.log('Result ', result);
        console.log('on est connecter');
        //rediriger vers la page souhaiter
      });
    } catch (error) {
      console.log('Error ', error);
    }
    
  }

  /**
   * 
   * @param user 
   */
  async storeNewAccount(user: User)
  {
    try {
      await addDoc(collection(this.db, "Users"), Object.assign({}, user));
    } catch (error) {
      console.log('Oula', error);
    }
  }



  /**
   * 
   * @returns 
   */
  sendVerificationMail()
  {
    return this.fireAuth.currentUser.then((user: any) => {
      user.sendVerificationMail()
    }).then(() => {
      this.router.navigate(['/']);
    });
  }


  /**
   * 
   */
  forgetPassword()
  {

  }

  logout()
  {
    return this.fireAuth.signOut().then(() => {
      this.router.navigate(['/customer/signin']);
    })
  }
}



