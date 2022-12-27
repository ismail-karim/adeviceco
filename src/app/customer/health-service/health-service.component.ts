import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-service',
  templateUrl: './health-service.component.html',
  styleUrls: ['./health-service.component.scss']
})
export class HealthServiceComponent implements OnInit {

  public pageTitle: string = "Assurance santé";
  constructor() { }

  ngOnInit(): void {
  }

}
