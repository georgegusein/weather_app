import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
city: String;
weather: String;
icon: String;
tempetature: number;
cities: Object;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {


  }

  findCity(str){
    if (!str || str == " " || str == ""){
      this.cities="";
    }else{
      this.weatherService.findCity(str).subscribe(data =>{
        console.log(data);
        this.cities=data;
          });
    }

  }

  showWether(str){
    this.weatherService.getTemp(str).subscribe(data =>{
      console.log(data);
      this.city=data.name;
      this.weather = data.weather[0].main;
      this.icon = data.weather[0].icon;
      this.tempetature=data.main.temp;
      this.cities="";
    });
  }



}
