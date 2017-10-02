import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { ValidFields } from "../interfaces/fields.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private showNicknameMessage: boolean;
    private showNameMessage: boolean;
    private showGivenNameMessage: boolean;
    private nicknameMessage: string;
    private nameMessage: string;
    private givenNameMessage: string;
    private valid_Fields: ValidFields;
    constructor(public auth: AuthService) {
          auth.handleAuthentication();
          this.valid_Fields = {
            isValidNickName: true,
            isValidName: true,
            isValidGivenName: true
        };
    }

    ngOnInit() {     
    }

    onfieldsValidation(fields: ValidFields){
        this.valid_Fields = fields
        this.nicknameMessage = "Nickname is required"
        this.nameMessage = "Name is required"
        this.givenNameMessage = "Given Name is required"
        
        if(!this.valid_Fields.isValidNickName){
            this.showNicknameMessage = true;
        }
        if(!this.valid_Fields.isValidName){
            this.showNameMessage = true
        }
        if(!this.valid_Fields.isValidGivenName){
            this.showGivenNameMessage = true
        }
    }

    closeAlert(alert: string){
        switch(alert)
        {
            case 'NickName': 
                this.showNicknameMessage = false;
                break;
            case 'Name':
                this.showNameMessage = false;
                break;
            case 'GivenName':
                this.showGivenNameMessage = false;
                break;
        }
    }
}