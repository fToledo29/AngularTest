import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { NgForm } from '@angular/forms'
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidFields } from "../interfaces/fields.interface";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile: any;
    validFields: ValidFields;
    @Output()fieldsValidation : EventEmitter<ValidFields> = new EventEmitter<ValidFields>();
    userForm = new FormGroup ({
        nickname: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        given_name: new FormControl('', Validators.required),
        family_name: new FormControl(''),
        gender: new FormControl(''),
    });
    constructor(public auth: AuthService) {
        this.validFields = {
            isValidNickName: true,
            isValidName: true,
            isValidGivenName: true
        };
     }

    ngOnInit() {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
              this.profile = profile;
            });
        }        
    }

    validate(){
        
        const nickname = this.userForm.get('nickname');
        const name = this.userForm.get('name');
        const givenName = this.userForm.get('given_name');

        this.validFields.isValidNickName =  (nickname.errors && (nickname.dirty || nickname.touched)) ? false : true;
        
        this.validFields.isValidName = (name.errors && (name.dirty || name.touched)) ? false : true;
        
        this.validFields.isValidGivenName = (givenName.errors && (givenName.dirty || givenName.touched)) ? false : true ;
             
    }

    onSubmit() { 
        this.fieldsValidation.emit(this.validFields);
    }
}
