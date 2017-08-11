import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/map'

const baseUrl = 'http://localhost:5000/'

@Injectable()
export class HttpService{
    constructor(private http:Http){}

    post(url, data){

        const headers =new Headers({
            'Content-type': 'application/json'
        })

        const requestOptions = new RequestOptions({
            headers: headers
        })

        return this.http
                            .post(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
                            .map(res => res.json())
    }



    get(url){
        return this.http
                            .get(`${baseUrl}${url}`)
                             .map(res => res.json())
    }


}