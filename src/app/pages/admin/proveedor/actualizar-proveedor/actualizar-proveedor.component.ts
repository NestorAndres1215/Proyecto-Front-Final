import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {
  
  proveedor: any;
  proveedorId: any = 0;
  constructor(
    private proveedorService:ProveedorService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.proveedorId = this.route.snapshot.params['proveedorId'];
    this.proveedorService.obtenerProveedorPorId(this.proveedorId).subscribe(
      (data) => {
        this.proveedor = data;
        console.log(this.proveedor);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  actualizarProveedor(): void {
    // Verificar si el proveedorId y proveedor son válidos
    if (!this.proveedorId || !this.proveedor) {
      console.error('ProveedorId o proveedor son inválidos.');
      return;
    }
  
    console.log('ProveedorId:', this.proveedorId);
    console.log('Proveedor:', this.proveedor);
  
    // Llamar al servicio para actualizar el proveedor
    this.proveedorService.actualizarProveedor(this.proveedorId, this.proveedor).subscribe(
      (respuesta: any) => {
        // El proveedor se actualizó correctamente
        console.log('Proveedor actualizado:', respuesta);
        Swal.fire({
          icon: 'success',
          title: 'Proveedor actualizado',
          text: 'El proveedor se ha actualizado correctamente.'
        }).then(() => {
          // Redireccionar a la página de proveedores
          this.router.navigate(['/admin/proveedor']);
        });
      },
      (error: any) => {
        // Error al actualizar el proveedor
        console.error('Error al actualizar el proveedor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar el proveedor',
          text: 'Ocurrió un error al actualizar el proveedor. Por favor, inténtalo de nuevo.'
        });
      }
    );
  }
  
}
