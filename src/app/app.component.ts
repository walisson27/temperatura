import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClimaHelpers } from './helpers/climaHelpers';
import { RequisicaoWeatherApiService } from './servicos/requisicaoWeatherApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clima: any;
  helper: ClimaHelpers;
  icone = 800;
  erro = false;

  get data(): string {
    return this.helper.formatData();
  }

  get hora(): any {
    const dataHora = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return dataHora;
  }

  constructor(private service: RequisicaoWeatherApiService) {
    this.helper = new ClimaHelpers();
  }

  ngOnInit(): void {
    this.obterGeolocalizacao();
    setInterval(() => {
      this.hora;
    }, 1000);
  }

  obterGeolocalizacao(): void {
    let latitude: number;
    let longitude: number;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          this.service.getWeatherGeolocalizacao(latitude, longitude).subscribe(
            (response) => {
              this.clima = response;
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, maximumAge: 20000, timeout: 20000 }
      );
    }
  }

  carregarClima(local: NgForm): void {
    if (local != null) {
      this.service
        .getWeather(local.value.busca)
        .subscribe(
          (response) => {
            (this.clima = response),
              (this.erro = false),
              (this.icone = this.helper.getIconNumber(
                this.clima.weather[0].id
              ));
          },
          (error) => {
            console.error(error), (this.erro = true), (this.clima = null);
          }
        )
        .add(() => {
          local.reset();
        });
    }
  }
}
