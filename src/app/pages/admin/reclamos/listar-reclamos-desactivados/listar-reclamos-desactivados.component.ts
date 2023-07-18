import { Component, OnInit } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-listar-reclamos-desactivados',
  templateUrl: './listar-reclamos-desactivados.component.html',
  styleUrls: ['./listar-reclamos-desactivados.component.css']
})
export class ListarReclamosDesactivadosComponent implements OnInit {
  reclamo: any = [];
  reclamos: any;
  constructor(
    private reclamoService: ReclamoService

  ) { }

  ngOnInit(): void {
    this.obtenerReclamoDesactivados();
  }
  obtenerReclamoDesactivados() {
    this.reclamoService.listarReclamoDesactivadas().subscribe(
      (reclamos: any) => {
        this.reclamos = reclamos;
      },
      (error: any) => {
        console.log("Error al obtener las marcas: ", error);
      }
    );
  }
}
