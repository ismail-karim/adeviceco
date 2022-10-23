import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'adeviceco';
  public showHeader: boolean = false;
  public showFooter: boolean = false;
  constructor(private router: Router) {}

    ngOnInit(): void {
        if(this.router.url === '/admin')
        {
           this.showHeader = true;
           this.showFooter = true; 
        }
        else{
            this.showHeader = false;
           this.showFooter = false;
        }

        console.log('header : %s , footer : %s', this.showHeader, this.showFooter);
    }

  
}
