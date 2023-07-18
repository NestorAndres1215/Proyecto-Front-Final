import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {

  categoria: any;
  categoriaId: any = 0;
  productoForm!: FormGroup;
  imagenSeleccionada!: File;
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.params['categoriaId'];
    this.categoriaService.obtenerCategoriaPorId(this.categoriaId).subscribe(
      (data) => {
        this.categoria = data;
        console.log(this.categoria);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  actualizarCategoria() {
    if (this.imagenSeleccionada instanceof File) {
      this.categoria.imagen = this.imagenSeleccionada;
    }
    this.categoriaService.actualizarCategoria(this.categoriaId, this.categoria).subscribe(res => {
      Swal.fire('Producto actualizado', '', 'success').then(() => {
        this.router.navigate(['/admin/categoria']);
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
