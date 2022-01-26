/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequisicaoWeatherApiService } from './requisicaoWeatherApi.service';

describe('Service: RequisicaoWeatherApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisicaoWeatherApiService]
    });
  });

  it('should ...', inject([RequisicaoWeatherApiService], (service: RequisicaoWeatherApiService) => {
    expect(service).toBeTruthy();
  }));
});
