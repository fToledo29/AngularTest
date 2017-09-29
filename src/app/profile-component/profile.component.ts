import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { NgForm } from '@angular/forms'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: any;
    formatedFrofile: any;
    constructor(public auth: AuthService) { }

    ngOnInit() {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
            console.log("Profile successfully retrieved.")
        } else {
            this.auth.getProfile((err, profile) => {
              this.profile = profile;
              console.log("Issues trying to retrieve profile.")
            });
        }
    }
}
