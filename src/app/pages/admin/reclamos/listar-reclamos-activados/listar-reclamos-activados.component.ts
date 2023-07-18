import { Component, OnInit } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-listar-reclamos-activados',
  templateUrl: './listar-reclamos-activados.component.html',
  styleUrls: ['./listar-reclamos-activados.component.css']
})
export class ListarReclamosActivadosComponent implements OnInit {
  reclamo: any = [];
  reclamos: any;
  constructor(
    private reclamoService:ReclamoService

  ) { }

  ngOnInit(): void {
    this.obtenerReclamoActivado();
  }
  obtenerReclamoActivado() {
    this.reclamoService.listarReclamoActivadas().subscribe(
      (reclamos: any) => {
        this.reclamos = reclamos;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
}
