import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService, private router: Router) { }
  nombre: string = '';
  Ruc: string = '';
  Direccion: string = '';
  Telefono: string = '';
  Email: string = '';
  ngOnInit(): void {
  }
  crearProveedor(): void {

    this.proveedorService.agregarProveedor(this.nombre, this.Ruc, this.Direccion, this.Telefono, this.Email).subscribe(
      (respuesta: any) => {
        // El proveedor se creó correctamente
        console.log('Proveedor creado:', respuesta);

        Swal.fire({
          icon: 'success',
          title: 'Proveedor creado',
          text: 'El proveedor se ha creado correctamente.'
        });
        this.router.navigate(['/admin/proveedor']);
      },
      (error: any) => {
        // Error al crear el proveedor
        console.error('Error al crear el proveedor:', error);

        Swal.fire({
          icon: 'error',
          title: 'Error al crear el proveedor',
          text: 'Ocurrió un error al crear el proveedor. Por favor, inténtalo de nuevo.'
        });
      }
    );
  }
}
