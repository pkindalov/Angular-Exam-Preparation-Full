import { Component } from '@angular/core'
import { RegisterUser } from './register-user.model'

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUser
}