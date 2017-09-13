import { Injectable } from '@angular/core';
//http req
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getTemp(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=625294670deee1b9860ade8d81deb750&units=metric').map(res => res.json());
  }

  findCity(str){
    return this.http.get('http://localhost:3000/api/cities/'+str).map(res => res.json());
  }

}
