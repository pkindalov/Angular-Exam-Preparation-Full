import { Component } from '@angular/core'
import { AddCarModel } from './add-car.model'
import { CarsActions } from '../store/cars/cars.actions'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store/app.state'
import { Router } from '@angular/router'


@Component({
    selector: 'add-car',
    templateUrl: './add-car.component.html'
})

export class AddCarComponent{
    car: AddCarModel = new AddCarModel();

    constructor(
        private carsActions: CarsActions,
        private ngRedux: NgRedux<IAppState>,
        private router: Router
    ){}


    addCar(){
        this.carsActions
                .addCar(this.car)
              
        let subscription = this.ngRedux
                .select(state => state.cars)        
                .subscribe(cars => {
                    if(cars.carAdded){
                        const carId = cars.carAddedId
                        subscription.unsubscribe()
                        this.router.navigateByUrl(`/cars/details/${carId}`)
                    }
                })
                
    }

}