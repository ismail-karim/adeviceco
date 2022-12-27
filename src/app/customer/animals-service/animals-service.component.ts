import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-service',
  templateUrl: './animals-service.component.html',
  styleUrls: ['./animals-service.component.scss']
})
export class AnimalsServiceComponent implements OnInit {

  public pageTitle: string = "Assurance animaux"
  constructor() { }

  ngOnInit(): void {
  }

}
