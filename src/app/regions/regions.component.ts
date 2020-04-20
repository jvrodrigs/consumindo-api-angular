import { ApiServiceService } from './../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions: any;
  estados: any;
  cidades: any;
  subdistritos: any;

  constructor(private apiService: ApiServiceService) { }

  

  ngOnInit(): void {

    const result = this.apiService.listRegio(); 
    result.subscribe((data: any) => {
      console.log(data);
      this.regions = data;
    }, (error: any) => {
      console.log(error);
    });
  }
  
  onClickRegion(value: string): void {
    if(value == '0'){
      this.estados = [];
    }else {
     this.apiService.listEstados(value).subscribe((data) => {
       console.log(data);
       this.estados = data;
     });
  }
 }

 chamarCidades(estado: string): void {
   this.apiService.listCidades(estado).subscribe((data) => {
    console.log(data); 
    this.cidades = data;

   });
 }

 chamarSubDistritos(cidades: string): void {
   this.apiService.listarSubDistritos(cidades).subscribe((data) => {
     console.log(data)
     this.subdistritos = data;
   });
 }

}
