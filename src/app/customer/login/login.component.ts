import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public correctEmail: boolean = false;
    public userEmail: string = "";
    public userPassword: string = "";
  
    public mail: string = "ismael@wi-pool.com";
    public pass: string = "azerty";
    constructor(
      private snackBar: MatSnackBar,
      private router: Router
    ) { }
  
    ngOnInit(): void {
    }
  

    public redirectToSignInCompenent()
    {
        this.router.navigateByUrl("/customer/signin");
    }

    public verifEmail(email: string)
    {
        //Récupération de l'email depuis la base de données et comparer avec celui de l'utilisateur
        if(email != this.mail)
        {
        this.snackBar.open('Email Inccorect', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'red-snackBar'});
        }
        else {
    
        this.correctEmail = true; 
        }
    }
  
    verifPassword(password: string)
    {
        if(password != this.pass)
        {
            this.snackBar.open('Mot de passe incorrect', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'red-snackBar'});
        }
        else {
            this.router.navigate(['/']);
        }
    }

}
