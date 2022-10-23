import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  /**
   * Verify if information {email, password} are right and redirect user to profil page
   */
  public register()
  {
    this.router.navigateByUrl('/customer/profil');
  }


  public redirectToLogin()
  {
    this.router.navigateByUrl('/customer/login');
  }
}
