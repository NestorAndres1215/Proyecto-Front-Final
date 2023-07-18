import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-compra',
  templateUrl: './registrar-compra.component.html',
  styleUrls: ['./registrar-compra.component.css']
})
export class RegistrarCompraComponent implements OnInit {

  metodoPago: string[] = [
    'Tarjeta de crédito',
    'Transferencia bancaria',
    'PayPal',
    'Efectivo'
  ];
  proveedores: any[] = [];
  compra: any = {
    producto: '',
    metodoPago: '',
    cantidad: 0,
    diaEntrega: '',
    precioUnidad: 0.0,
    descuento: 0.0,
    proveedor: {
      proveedorId: '',
    },
    fechaCompra: '',
    totalCompra: '',
  };


  constructor(private compraService: CompraService,
    private  proveedorService:ProveedorService,
    private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.proveedorService.listarProveedorActivadas().subscribe(
      (dato:any) => {
        this.proveedores = dato;
        console.log(this.proveedorService);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }
  formSubmit() {
    if (this.compra.producto.trim() == '' || this.compra.producto == null) {
      this.snack.open("El producto es requerido !!", '', {
        duration: 3000
      });
      return;
    }
  
    this.compraService.agregarCompra(this.compra).subscribe(
      (dato: any) => {
        // Reiniciar los valores de la compra
        this.compra.producto = '';
        console.log(this.compra.producto)
        this.compra.metodoPago = '';
        this.compra.cantidad = '';
        this.compra.diaEntrega = '';
        this.compra.precioUnidad = '';
        this.compra.descuento = '';
        this.compra.fechaCompra = '';
        this.compra.totalCompra ='';
        this.compra.proveedor = {
          proveedorId: ''
        };
  
        Swal.fire('Solicitud de Reclamo enviada', 'Se ha enviado su Solicitud de Reclamo con éxito', 'success');
        this.router.navigate(['/admin/compras']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al enviar su solicitud de reclamo', 'error');
      }
    );
  }
  calcularTotalCompra() {
    const cantidad = parseInt(this.compra.cantidad);
    const precioUnidad = parseFloat(this.compra.precioUnidad);
  
    if (!isNaN(cantidad) && !isNaN(precioUnidad)) {
      const subtotal = this.compra.precioUnidad * this.compra.cantidad;
      const descuentoAplicado = subtotal * (this.compra.descuento / 100);
      this.compra.totalCompra = subtotal - descuentoAplicado;
    } else {
      this.compra.totalCompra = '';
    }
  }
}
