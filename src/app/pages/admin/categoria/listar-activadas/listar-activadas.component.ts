import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-activadas',
  templateUrl: './listar-activadas.component.html',
  styleUrls: ['./listar-activadas.component.css']
})
export class ListarActivadasComponent implements OnInit {
  categorias: any[] = [];
  nombre: string = '';
  categoria: any = [];
  categoriaId: string = '';
  //categorias: any;
  imagenUrlBase = 'data:image/jpeg;base64,';
  constructor(private http: HttpClient,
    private categoriaService: CategoriaService,
    private router: Router) { }


  //mostrar la imagen
  mostrarImagen(producto: any): string {
    return producto.imagen ? this.imagenUrlBase + producto.imagen : '';
  }

  ngOnInit() {
    this.obtenerCategorias();
  }

  buscarPorNombre() {
    if (this.nombre && this.categorias) {
      this.categorias = this.categorias.filter((categoria: { nombre: string }) =>
        categoria.nombre.toLowerCase().includes(this.nombre.toLowerCase())
      );
    } else {
      this.restaurarCategorias();
      console.log("Ingrese un nombre para buscar.");
    }
  }

  restaurarCategorias() {
    this.nombre = ''; // Restablecer el valor del nombre a vacío
    this.categoriaService.listarCategoriasActivadas().subscribe(
      (categorias: any) => {
        this.categorias = categorias;
      },
      (error: any) => {
        console.log("Error al obtener las categorías: ", error);
      }
    );
  }


  obtenerCategorias() {
    this.categoriaService.listarCategoriasActivadas().subscribe(
      (categorias: any) => {
        this.categorias = categorias;
      },
      (error: any) => {
        console.log("Error al obtener las categorías: ", error);
      }
    );
  }

  desactivarCategoria(categoriaId: any): void {
    this.categoriaService.desactivarCategoria(categoriaId).subscribe(
      (respuesta: any) => {
        // Desactivación exitosa
        Swal.fire({
          icon: 'success',
          title: 'Categoría desactivada',
          text: respuesta.mensaje
        });
  
        // Actualizar la lista de categorías activadas
        this.obtenerCategorias();
      },
      (error: any) => {
        // Error al desactivar la categoría
        Swal.fire({
          icon: 'error',
          title: 'Error al desactivar la categoría',
          text: error.error.mensaje
        });
      }
    );
  }
  pageSize = 4; // Tamaño de página (número de elementos por página)
  pageIndex = 0; // 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}




