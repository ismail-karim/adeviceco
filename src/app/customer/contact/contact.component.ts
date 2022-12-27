import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public pageTitle: string = "Contact";
    public contactForm: UntypedFormGroup = new UntypedFormGroup({});
    constructor( 
      private formBuilder: UntypedFormBuilder,
      private snackBar: MatSnackBar,
      private router: Router
    ) { this.createForm()}
  
    ngOnInit(): void {
    }
  
    private createForm()
    {
      this.contactForm = this.formBuilder.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          object: ['', [Validators.required, Validators.minLength(6)]],
          message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]]
        }
      )
    }
  //return this.form.controls[input].invalid && (this.form.controls[input].dirty || this.form.controls[input].touched);
    private isInputValid(input: string)
    {
      return this.contactForm.controls[input].invalid && (this.contactForm.controls[input].dirty || this.contactForm.controls[input].touched );
    }
    public isNameValid(){
      return this.isInputValid('name');
    }
  
    public isEmailValid(){
      return this.isInputValid('email');
    }
  
    public isObjectValid(){
      return this.isInputValid('object');
    }
  
    public isMessageValid(){
      return this.isInputValid('message');
    }
  
    public isFormValid(){
      return this.contactForm.pristine || this.contactForm.invalid
    }
  
    public submitMessage(){
      //Envoyé les données en Post API
      //Afficher le message de succès ou d'erreur
      if(!this.isFormValid())
      {
        this.snackBar.open('message envoyé', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'green-snackBar'});
        setTimeout(()=>{
          this.router.navigate(['/accueil'])
        },2000);
      }
      else {
        this.snackBar.open('Une erreur s\'est produite', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'red-snackBar'});
      }
      //Rediriger l'utilisateur vers la page d'accueil
      
    }
}
