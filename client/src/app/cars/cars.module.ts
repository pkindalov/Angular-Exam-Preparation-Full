import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AddCarComponent } from './add-car.component'
import { ListCarComponent } from './list-cars.component'
import { CarsActions } from '../store/cars/cars.actions'
import { CarsService } from './cars.service'


@NgModule({
    declarations: [
        AddCarComponent,
        ListCarComponent
    ],
    providers: [
        CarsActions,
        CarsService
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ]
})

export class CarsModule{

}