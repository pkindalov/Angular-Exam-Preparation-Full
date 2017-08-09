import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store/app.state'
import { LoginUserModel } from './login-user.model'
import { UsersActions } from '../store/users/users.actions'

@Component({
    selector: 'login',
    templateUrl: './login-component.html'
})

export class LoginComponent{

    user: LoginUserModel = new LoginUserModel()

    constructor(
        private usersActions: UsersActions,
        private router: Router,
        private ngRedux: NgRedux<IAppState>
    ){}

    login(){
        this.usersActions.login(this.user)
        this.ngRedux
               .select(state => state.users)
               .subscribe(users => {
                   if(users.userAuthenticated){
                       this.router.navigateByUrl('')
                   }
               })
    }

}