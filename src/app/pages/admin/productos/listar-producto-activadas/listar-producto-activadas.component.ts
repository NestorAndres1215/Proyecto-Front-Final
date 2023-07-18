import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-listar-producto-activadas',
  templateUrl: './listar-producto-activadas.component.html',
  styleUrls: ['./listar-producto-activadas.component.css']
})
export class ListarProductoActivadasComponent implements OnInit {
  nombre: string = '';
  producto: any = [];
  categoriaId: string = '';
  productos: any[] = [];
  //productos: any;
  imagenUrlBase = 'data:image/jpeg;base64,';
  constructor(private http: HttpClient,
    private productoService: ProductoService,
    private router: Router) { }
  ngOnInit(): void {
    this.obtenerProducto();
  }
 //mostrar la imagen
 mostrarImagen(producto: any): string {
  return producto.imagen1 ? this.imagenUrlBase + producto.imagen1 : '';
}
 //mostrar la imagen
  mostrarImagen1(producto: any): string {
    return producto.imagen2 ? this.imagenUrlBase + producto.imagen2 : '';
  }
  obtenerProducto() {
    this.productoService.listarProductoActivadas().subscribe(
      (productos: any) => {
        this.productos = productos;
      },
      (error: any) => {
        console.log("Error al obtener las productos: ", error);
      }
    );
  }




  pageSize = 3; // Tamaño de página (número de elementos por página)
  pageIndex = 0; // 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
