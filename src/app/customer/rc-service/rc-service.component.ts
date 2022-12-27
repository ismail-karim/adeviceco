import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rc-service',
  templateUrl: './rc-service.component.html',
  styleUrls: ['./rc-service.component.scss']
})
export class RcServiceComponent implements OnInit {

  public pageTitle: string = "RC Decennelle";
  constructor() { }

  ngOnInit(): void {
  }

}
