import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'

const baseUrl = 'http://localhost:5000/'

@Injectable()
export class HttpService{
    constructor(private http:Http){}

    post(url, data){
        return this.http
                            .post(`${baseUrl}${url}`, JSON.stringify(data))
                            .map(res => res.json())
    }

}