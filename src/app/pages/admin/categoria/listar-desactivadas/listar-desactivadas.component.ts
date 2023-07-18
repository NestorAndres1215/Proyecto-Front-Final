import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-desactivadas',
  templateUrl: './listar-desactivadas.component.html',
  styleUrls: ['./listar-desactivadas.component.css']
})
export class ListarDesactivadasComponent implements OnInit {
  categoriaId: string = '';
  nombre: string = '';
  categoria: any[] = [];
  categorias: any;
  imagenUrlBase = 'data:image/jpeg;base64,';

  constructor(
    private http: HttpClient,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCategoriasDesactivadas();
  }

  mostrarImagen(producto: any): string {
    return producto.imagen ? this.imagenUrlBase + producto.imagen : '';
  }

  activarCategoria(categoriaId: any) {
    this.categoriaService.activarCategoria(categoriaId).subscribe(
      () => {
        console.log('Categoría activada exitosamente');
        Swal.fire('Éxito!', 'Categoría activada exitosamente', 'success');
        this.obtenerCategoriasDesactivadas();
        this.router.navigate(['/admin/categoria']);
      },
      (error) => {
        console.log('Error al activar la categoría:', error);
        Swal.fire('Error!', 'Error al activar la categoría', 'error');
      }
    );
  }

  obtenerCategoriasDesactivadas() {
    this.categoriaService.listarCategoriasDesactivadas().subscribe(
      (categorias: any[]) => {
        this.categorias = categorias;
        console.log("Categorías desactivadas: ", this.categorias);
      },
      (error: any) => {
        console.log("Error al obtener las categorías desactivadas: ", error);
      }
    );
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
}
