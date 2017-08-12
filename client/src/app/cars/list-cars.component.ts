import { Component, OnInit } from '@angular/core'
import { CarsActions } from '../store/cars/cars.actions'
import { NgRedux } from 'ng2-redux'
import { IAppState } from '../store/app.state'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'list-cars',
    templateUrl: './list-cars.component.html'
})

export class ListCarComponent implements OnInit{
    
    page = 1
    cars: Array<object> = []

    constructor(
        private carsActions: CarsActions,
        private router: Router,
        private route: ActivatedRoute,
        private ngRedux: NgRedux<IAppState>
    ){}

    ngOnInit(){

       this.route
              .queryParams
              .subscribe(params => {
                this.page = +params['page'] || 1
                this.carsActions.allCars(this.page)
                this.ngRedux.select(state => state.cars.allCars)
                                            .subscribe(cars => this.cars = cars)
       })


    }    


    prevPage(){
        if(this.page === 1){
            return
        }

        this.router.navigateByUrl(`cars/all?page=${this.page - 1}`)
 
    }

    nextPage(){
        if(this.cars.length === 0 || this.cars.length < 10){
            return
        }

        this.router.navigateByUrl(`cars/all?page=${this.page +1}`)
    }
    


}