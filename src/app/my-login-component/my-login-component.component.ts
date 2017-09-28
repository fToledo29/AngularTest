import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-my-login-component',
  templateUrl: './my-login-component.component.html',
  styleUrls: ['./my-login-component.component.css']
})
export class MyLoginComponentComponent implements OnInit {

  constructor(public auth: AuthService) {
      
   }

  ngOnInit() {
  }

}