import { Component } from '@angular/core'
import { RegisterUser } from './register-user'

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUser
}