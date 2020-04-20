import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  listRegio(): Observable<any> {
    return this
    .http
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes'); 

  }

  listEstados(regions: string): Observable<any> {
    return this
    .http
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regions}/estados`);
  }

  listCidades(estado: string): Observable<any> {
    return this
    .http
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
  }

  listarSubDistritos(cidades: string): Observable<any> {
    return this
    .http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cidades}/subdistritos`);
  }
}
