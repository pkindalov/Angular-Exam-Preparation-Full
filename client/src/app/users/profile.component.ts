import { Component, OnInit } from '@angular/core'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store/app.state'
// import { UsersActions } from '../store/users/users.actions'
import { CarsActions } from '../store/cars/cars.actions'


@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{

    cars: Array<object> = []

    constructor(
        private ngRedux: NgRedux<IAppState>,
        // private usersActions: UsersActions,
        private carsActions: CarsActions
        ){}

    ngOnInit(){
        this.carsActions.mine()

        this.ngRedux.select(state => state.cars.myCars)
                                 .subscribe(cars => {
                                     this.cars = cars
                                 })
               
    }


    delete(id){
        this.carsActions.delete(id)
    }


}