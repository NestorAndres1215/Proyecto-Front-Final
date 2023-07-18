import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  producto: any;
  id: any = 0;
  productoForm!: FormGroup;
  imagenSeleccionada!: File;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router

  ) { }

  ngOnInit(): void {
   
  }
  actualizarProducto() {
    if (this.imagenSeleccionada instanceof File) {
      this.producto.imagen = this.imagenSeleccionada;
    }
    this.productoService.actualizarProducto(this.id, this.producto).subscribe(res => {
      Swal.fire('Producto actualizado', '', 'success').then(() => {
        this.router.navigate(['/admin/producto']);
      });
    }, err => {
      Swal.fire('Error', 'Ocurrió un error al actualizar el producto', 'error');
    });
  }
  onImagenSeleccionada(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      this.imagenSeleccionada = inputElement.files[0];
    }
  }
}
