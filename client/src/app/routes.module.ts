import {  NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './users/register.component'

const routes: Routes = [
    { path: 'users/register', component: RegisterComponent  }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CarRoutesModule{

}