import { Component, OnInit } from '@angular/core';
import { SeleccionesService } from 'src/app/services/selecciones.service';

@Component({
  selector: 'app-otros-norteamerica',
  templateUrl: './otros-norteamerica.component.html',
  styleUrls: ['./otros-norteamerica.component.css']
})
export class OtrosNorteamericaComponent implements OnInit {
  guatemala: any = [];
  costarica: any = [];
  panama: any = [];
  jamaica: any = [];
  honduras: any = [];
  imagenUrlBase = 'data:image/jpeg;base64,';
  constructor(private seleccionService: SeleccionesService) { }

  ngOnInit(): void {
    this.obtenerGuatemala();
    this.obtenerCostaRica();
    this.obtenerHonduras();
    this.obtenerJamaica();
    this.obtenerPanama();
  }
  //mostrar la imagen
  mostrarImagen(guatemala: any): string {
    return guatemala.imagen1 ? this.imagenUrlBase + guatemala.imagen1 : '';
  }
  obtenerGuatemala() {
    this.seleccionService.obtenerGuatemala().subscribe(
      (guatemala: any) => {
        this.guatemala = guatemala;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
  obtenerCostaRica() {
    this.seleccionService.obtenerCostaRica().subscribe(
      (costarica: any) => {
        this.costarica = costarica;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
  obtenerJamaica() {
    this.seleccionService.obtenerJamaica().subscribe(
      (jamaica: any) => {
        this.jamaica = jamaica;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
  obtenerPanama() {
    this.seleccionService.obtenerPanama().subscribe(
      (panama: any) => {
        this.panama = panama;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
  obtenerHonduras() {
    this.seleccionService.obtenerHonduras().subscribe(
      (honduras: any) => {
        this.honduras = honduras;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
}
