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

    allCars(page = 1, search = null){

        let url = `cars/all?page=${page}`

        if(search){
            url += `&search=${search}`
        }

        return this.httpService
                            .get(url)
    }

}