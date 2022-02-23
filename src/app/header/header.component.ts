import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ModalCallComponent } from '../modal-call/modal-call.component';
import { ModalData } from '../models/modal-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public name: string = "";
  public email: string = "";
  public phone: string = "";
  public navChange: boolean = false
  constructor(
    public dialog: MatDialog,
    private elem: ElementRef,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
  @HostListener("document:scroll")
  onScroll(){
    let nav = this.elem.nativeElement.querySelector('.nav-bar');
    if(document.documentElement.scrollTop > 90)
    {
      this.navChange = true;
    }
    else{
      this.navChange = false;
    }
  }

  public openDialog(): void
  {
    const dialogRes = this.dialog.open(ModalCallComponent, {width: '60vw', height: '25vw', data: {name: this.name, email: this.email, phone: this.phone}});
    dialogRes.afterClosed().subscribe(result => {
      if(result !== 'close')
      {
        this.snackBar.open('Demande envoyée', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'green-snackBar'});
        //Envoyé les datas avec l'API methode Post
        console.log('result', result);
      }
    })
  }

  
}
