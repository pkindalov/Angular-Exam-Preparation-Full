import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login-component'
import { ProfileComponent } from './profile.component'
import { UsersService } from './users.service'
import { UsersActions } from '../store/users/users.actions'


@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ProfileComponent
    ],
    providers: [
        UsersService,
        UsersActions
    ],
    imports: [
        FormsModule,
        CommonModule
    ]
})

export class UsersModule{

}