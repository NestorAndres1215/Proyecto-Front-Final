import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  compra: any;
  compraId!: number;
  constructor(
    private route: ActivatedRoute,
    private compraService:CompraService,
  ) { }
  ngOnInit(): void {
    this.compraId = this.route.snapshot.params['compraId'];
    console.log("llego id" + this.compra);
    console.log(this.route.snapshot.params);
    this.compra = {}; // Inicializar this.compra con un objeto vacío u otro valor inicial
    this.obtenerCompraPorId(this.compraId);
  }
  obtenerCompraPorId(compraId: number): void {
    this.compraService.obtenerCompraPorId(compraId).subscribe(
      (data) => {
        this.compra = data;
        console.log(this.compra);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
