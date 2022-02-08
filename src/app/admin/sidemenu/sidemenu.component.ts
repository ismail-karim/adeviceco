import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  public showMenuBtn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showMenu()
  {
    
    this.showMenuBtn = !this.showMenuBtn;
    


  }
}
