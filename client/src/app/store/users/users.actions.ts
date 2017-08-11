import { Injectable } from '@angular/core'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../app.state'
import { UsersService } from '../../users/users.service'
 
export const USER_REGISTERED = 'users/REGISTER'
export const USER_LOGGED_IN = 'users/LOGIN'
export const USER_LOGOUT = 'users/LOGOUT'

@Injectable()
export class UsersActions{

    constructor(
        private usersService: UsersService,
        private ngRedux: NgRedux<IAppState>
    ){}

    register(user){
        this.usersService
               .register(user)
               .subscribe(result => {
                    this.ngRedux.dispatch({
                        type: USER_REGISTERED,
                        result
                    })
               })
    }

    login(user){
        this.usersService
                    .login(user)
                    .subscribe(result => {
                        this.ngRedux.dispatch({
                            type: USER_LOGGED_IN,
                            result
                        })
                    })

    } 
                
    
    logout(){
        this.ngRedux.dispatch({
            type: USER_LOGOUT
        })
    }



}