import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CallModalComponent } from './call-modal/call-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public name: string = "";
    public email: string = "";
    public phone: string = "";
    public navChange: boolean = false;

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
    const dialogRes = this.dialog.open(CallModalComponent, {width: '60vw', height: '25vw', data: {name: this.name, email: this.email, phone: this.phone}});
    dialogRes.afterClosed().subscribe((result: string) => {
      if(result !== 'close')
      {
        this.snackBar.open('Demande annulée', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'red-snackBar'});
        
      }
      else{
        this.snackBar.open('Demande annulée', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'end', panelClass:'red-snackBar'});
      }
    })
  }
}
