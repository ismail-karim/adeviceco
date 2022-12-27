import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custumer-servives',
  templateUrl: './custumer-servives.component.html',
  styleUrls: ['./custumer-servives.component.scss']
})
export class CustumerServivesComponent implements OnInit {

  public pageTitle: string = "Nos services";
  constructor() { }

  ngOnInit(): void {
  }

}
