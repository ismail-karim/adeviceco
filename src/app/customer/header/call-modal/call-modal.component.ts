import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/models/modal-data';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.scss']
})
export class CallModalComponent implements OnInit {

    form: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public dialogRef: MatDialogRef<CallModalComponent>,
    private formBuilder: FormBuilder
  ) { this.createForm()}

  ngOnInit(): void {
  }

  /**
   * 
   */
  private createForm(){
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required] ,
        email: ['', [Validators.required, Validators.email]],
        phone:['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(10)]]
      }
    )
  }

  /**
   * 
   * @returns 
   */
  public invalidName(){
    return this.invalideInput('name');
  }


  /**
   * 
   * @returns 
   */
  public invalidEmail(){
    return this.invalideInput('email'); 
  }


  /**
   * 
   * @returns 
   */
  public invalidPhone(){
    return this.invalideInput('phone');
  }

  /**
   * 
   * @param input 
   * @returns 
   */
  public invalideInput(input: string)
  {
    return this.form.controls[input].invalid && (this.form.controls[input].dirty || this.form.controls[input].touched);
  }


  /**
   * 
   * @returns 
   */
  public isValidatedForm(){
    return this.form.pristine || this.form.invalid;
  }


  /**
   * 
   */
  public closeModal()
  {
    this.dialogRef.close('close');
  }


  /**
   * 
   */
  public submitForm()
  {
    if(!this.isValidatedForm())
    {
      this.dialogRef.close(this.data);
    }
  }

}
