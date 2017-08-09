import { Component } from '@angular/core'
import { RegisterUserModel } from './register-user.model'
import { UsersActions } from '../store/users/users.actions'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store'
import { Router } from '@angular/router' 

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUserModel= new RegisterUserModel()

    constructor(
        private usersActions : UsersActions,
        private router: Router,
        private ngRedux: NgRedux<IAppState>){}

    register(){
        this.usersActions .register(this.user)

        this.ngRedux
              .select(state => state.users.userRegistered)
              .subscribe(userRegistered => {
                  if(userRegistered){
                        this.router.navigateByUrl('users/login')
                  }
                  
              })
                
  }
    
}