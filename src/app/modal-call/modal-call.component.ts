import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalData } from '../models/modal-data';
@Component({
  selector: 'app-modal-call',
  templateUrl: './modal-call.component.html',
  styleUrls: ['./modal-call.component.scss']
})
export class ModalCallComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    public dialogRef: MatDialogRef<ModalCallComponent>,
  ) { }
    

  ngOnInit(): void {
  }

  public close()
  {
    this.dialogRef.close(this.data);
  }
  public callAfter()
  {}
}
