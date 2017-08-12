import { Injectable } from '@angular/core'

import { HttpService } from '../core/http.service'

@Injectable()
export class CarsService{

    constructor(
        private httpService: HttpService
    ){}


    addCar(car){
        return this.httpService
                            .post('cars/create', car, true)
    }

    allCars(page = 1){
        return this.httpService
                            .get(`cars/all?page=${page}`)
    }

}