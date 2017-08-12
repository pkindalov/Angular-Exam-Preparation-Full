import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CarsActions } from '../store/cars/cars.actions'

import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store/app.state'

import { CarReviewModel } from './car-review.model'


@Component({
    selector: 'car-details',
    templateUrl: './car-details.component.html'
})

export class CarDetailsComponent implements OnInit{
    carId: number = 0
    car: object = {}
    review: CarReviewModel = new CarReviewModel(5) 

    constructor(
       private route: ActivatedRoute,
       private carsActions: CarsActions,
       private ngRedux: NgRedux<IAppState>
    ){}


    ngOnInit(){
        this.route.params
                .subscribe(params => {
                    const id = params['id']
                   
                    this.carsActions.details(id)
                    this.ngRedux.select(state => state.cars.carDetails)
                                             .subscribe(car => {
                                                this.car = car
                                             })
                })
    }


    like(){
        this.carsActions.like(this.car['id'])
    }

    
    submitReview(){
        this.carsActions.submitReview(this.car['id'], this.review)
    }


}