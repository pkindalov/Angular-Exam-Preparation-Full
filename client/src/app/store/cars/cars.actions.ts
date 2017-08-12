import { Injectable } from '@angular/core'
import { CarsService } from '../../cars/cars.service'

import { NgRedux } from 'ng2-redux'
import { IAppState } from '../app.state'

export const ADD_CAR = 'cars/ADD'
export const ALL_CARS = 'cars/ALL'
export const CAR_DETAILS = 'cars/DETAILS'
export const CAR_LIKE = 'cars/LIKE'
export const CAR_ADD_REVIEW = 'cars/ADD_REVIEW'
 
@Injectable()
export class CarsActions{

    constructor(
        private carsService: CarsService,
        private ngRedux: NgRedux<IAppState>
    ){}

    addCar(car){
        this.carsService
                .addCar(car)
                .subscribe(result => {
                    this.ngRedux.dispatch({
                        type: ADD_CAR,
                        result
                    })
                })
    }

    allCars(page = 1, search = null){
        this.carsService
                .allCars(page, search)
                .subscribe(cars => {
                    this.ngRedux.dispatch({
                        type: ALL_CARS,
                        cars
                    })
                })
        
    }


    details(id){
        this.carsService
                .details(id)
                .subscribe(car => {
                    this.ngRedux.dispatch({
                        type: CAR_DETAILS,
                        car
                    })
                })
    }


    like(id){
        this.carsService
                .like(id)
                .subscribe(result =>{
                   this.ngRedux.dispatch({
                       type: CAR_LIKE,
                        result
                   })
                } )
    }


    submitReview(id, review){
        this.carsService.submitReview(id, review)
                                      .subscribe(result => {
                                          this.ngRedux.dispatch({
                                            type: CAR_ADD_REVIEW,
                                            result
                                          })
                                      })
    }


}