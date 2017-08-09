import { Injectable } from '@angular/core'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../app.state'
import { UsersService } from '../../users/users.service'
 
export const USER_REGISTERED = 'users/REGISTER'

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
}