import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { UsersService } from './users.service'
import { UsersActions } from '../store/users/users.actions'

@NgModule({
    declarations: [RegisterComponent],
    providers: [
        UsersService,
        UsersActions
    ],
    imports: [FormsModule]
})

export class UsersModule{

}