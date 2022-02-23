import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalData } from '../models/modal-data';
@Component({
  selector: 'app-modal-call',
  templateUrl: './modal-call.component.html',
  styleUrls: ['./modal-call.component.scss']
})
export class ModalCallComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public dialogRef: MatDialogRef<ModalCallComponent>,
    private formBuilder: FormBuilder
  ) {this.createForm() }
    

  ngOnInit(): void {
  }

  private createForm(){
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required] ,
        email: ['', [Validators.required, Validators.email]],
        phone:['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(10)]]
      }
    )
  }
  public invalidName(){
    return this.invalideInput('name');
  }


  public invalidEmail(){
    return this.invalideInput('email');
  }


  public invalidPhone(){
    return this.invalideInput('phone');
  }

  public invalideInput(input: string)
  {
    return this.form.controls[input].invalid && (this.form.controls[input].dirty || this.form.controls[input].touched);
  }


  public isValidatedForm(){
    return this.form.pristine || this.form.invalid;
  }


  public close()
  {
    this.dialogRef.close('close');
  }
  public submit()
  {
    if(!this.isValidatedForm())
    {
      this.dialogRef.close(this.data);
    }
  }
}
