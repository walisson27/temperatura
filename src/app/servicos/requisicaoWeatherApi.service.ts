import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoWeatherApiService {
  constructor(private http: HttpClient) {}
  getWeather(local: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt&appid=2e3c02c2be0295cc4a6a5c3a29533d6a&units=metric
    `;
    return this.http.get<any>(url);
  }

  getWeatherGeolocalizacao(lat: number, long: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt&appid=2e3c02c2be0295cc4a6a5c3a29533d6a&units=metric
    `;
    return this.http.get<any>(url);
  }
}
