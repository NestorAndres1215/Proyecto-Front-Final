import { Component, OnInit } from '@angular/core';
import { SeleccionesService } from 'src/app/services/selecciones.service';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.component.html',
  styleUrls: ['./argentina.component.css']
})
export class ArgentinaComponent implements OnInit {
 
  argentina: any = [];

  imagenUrlBase = 'data:image/jpeg;base64,';
  constructor(
    private seleccionService:SeleccionesService
  ) { }

  ngOnInit(): void {
    this.obtenerArgentina();
  }
  obtenerArgentina() {
    this.seleccionService.obtenerArgentina().subscribe(
      (argentina: any) => {
        this.argentina = argentina;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
    //mostrar la imagen
    mostrarImagen(argentina: any): string {
      return argentina.imagen1 ? this.imagenUrlBase + argentina.imagen1 : '';
    }
}
