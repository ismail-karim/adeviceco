import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  public openDialog(): void
  {
    const dialogRes = this.dialog.open(ModalCallComponent, {width: '500px', data: {name: this.name, email: this.email, phone: this.phone}});
    dialogRes.afterClosed().subscribe(result => {
      console.log('resultat', result);
    })
  }
}
