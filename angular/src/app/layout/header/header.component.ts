import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/core/authentication/auth-guard.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginService } from 'src/app/form-login/components/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onClickLogout(): void {
    this.loginService.logout();
  }

}
