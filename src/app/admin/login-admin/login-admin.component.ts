import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

    public emailInput: string = '';
    public pswInput: string = '';


    private email: string = "ismail@test.com";
    private password: string = "azerty";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public checkAuthentification(email: string, password: string)
  {
    if(email === this.email && password === this.password)
    {
        //redirect to admin page
        this.router.navigate(['/admin']);
    }
  }
}
