import {  NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login-component'
import { AddCarComponent } from './cars/add-car.component'
import { StatsComponent } from './stats/stats.component'
import { PrivateRoute } from './core/private-route'
import { ListCarComponent} from './cars/list-cars.component'
import { CarDetailsComponent } from './cars/car-details.component'

const routes: Routes = [
    { path: '', component: StatsComponent} ,
    { path: 'users/register', component: RegisterComponent  },
    { path: 'users/login', component: LoginComponent },
    {
         path: 'cars/add', 
         component: AddCarComponent,
          canActivate: [PrivateRoute]
     },

    { path: 'cars/all', component: ListCarComponent },
    { path: 'cars/details/:id', component: CarDetailsComponent } 
      
    
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CarRoutesModule{

}