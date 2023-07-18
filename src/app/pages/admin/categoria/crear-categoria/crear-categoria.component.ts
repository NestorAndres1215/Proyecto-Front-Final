import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {


  nombre:string='';
  imagen: File | undefined;
  constructor(

    private categoriaService:CategoriaService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  crearCategoria(): void {
    if (!this.imagen) {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear el producto',
        text: 'Por favor, selecciona una imagen para el producto.'
      });
      return;
    }

    this.categoriaService.agregarCategoria(this.nombre,this.imagen).subscribe(
      respuesta => {
        // Si el servidor responde con éxito, mostramos un mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'Producto creado',
          text: 'El producto se ha creado exitosamente'
        });
        this.router.navigate(['/admin/categoria']);
      },
      error => {
        // Si el servidor responde con error, mostramos un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Error al crear el categoria',
          text: 'Ocurrió un error al intentar crear el producto. Por favor, intenta de nuevo más tarde.'
        });
      }
    );
  }

  onFileSelected(event:any){
    this.imagen=event.target.files[0];
  }


  resetForm(){
    this.nombre='';
    this.imagen=undefined;
  }
}
