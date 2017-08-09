import { Component } from '@angular/core'
import { RegisterUser } from './register-user.model'
import { UsersService } from './users.service'

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUser = new RegisterUser()

    constructor(private usersService:UsersService){}

    register(){
        this.usersService
              .register(this.user)
              .subscribe(res => console.log(res))
            
    }
}