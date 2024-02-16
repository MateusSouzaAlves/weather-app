import { faDroplet, faTemperatureHigh, faTemperatureLow, faWifi, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}