import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { UsersService } from './users.service'

@NgModule({
    declarations: [RegisterComponent],
    providers: [UsersService],
    imports: [FormsModule]
})

export class UsersModule{

}