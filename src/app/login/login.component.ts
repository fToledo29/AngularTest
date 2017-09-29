import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
      if(this.auth.isAuthenticated())
        {
            this.router.navigate(['profile']);
        }
  }

}
