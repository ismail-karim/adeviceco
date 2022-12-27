import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.component.html',
  styleUrls: ['./cgv.component.scss']
})
export class CgvComponent implements OnInit {

  public pageTitle: string = "Conditions générales de ventes";
  constructor() { }

  ngOnInit(): void {
  }

}
