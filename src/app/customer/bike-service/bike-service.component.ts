import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-service',
  templateUrl: './bike-service.component.html',
  styleUrls: ['./bike-service.component.scss']
})
export class BikeServiceComponent implements OnInit {

  public pageTitle: string = "Assurance moto"
  constructor() { }

  ngOnInit(): void {
  }

}
