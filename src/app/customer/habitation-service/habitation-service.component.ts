import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitation-service',
  templateUrl: './habitation-service.component.html',
  styleUrls: ['./habitation-service.component.scss']
})
export class HabitationServiceComponent implements OnInit {

  public pageTitle: string = "Assurance habitation";
  constructor() { }

  ngOnInit(): void {
  }

}
