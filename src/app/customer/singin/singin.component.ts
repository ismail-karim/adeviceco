import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  public email!: string;
  public password!: string;
  public username!: string;

  private user: User = new User();
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  /**
   * Verify if information {email, password} are right and redirect user to profil page
   */
  public register()
  {
    this.user.email = this.email;
    this.user.username = this.username;
    this.user.login = true;
    this.user.role = 1;

    this.authService.createNewUserAccount(this.user, this.password);
    
  }


  public redirectToLogin()
  {
    this.router.navigateByUrl('/customer/login');
  }
}
