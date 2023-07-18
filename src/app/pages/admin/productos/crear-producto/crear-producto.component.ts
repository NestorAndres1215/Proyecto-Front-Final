import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  talla: string[] = ['16', 'S', 'L', 'XL'];
  zapatillas = ['36', '37', '38', '39', '40'];
  polos = ['S', 'M', 'L', 'XL', 'XXL'];
  genero: string[] = ['Femenino', 'Masculino'];
  atributo: string[] = ['Zapatillas', 'Polos','Sudadera','pantalon'];
  categorias: any[] = [];
  marcas: any[] = [];
  producto: any = {
    nombre: '',
    precio: '',
    descripcion: '',
    

    version: '',
    material: '',
    genero: '',
    equipo: '',
    temporada: '',
    atributo:'',
   

    categoria: {
      categoriaId: '',
    },

    imagen1: undefined as File | undefined,
    imagen2: undefined as File | undefined
  };


  constructor(
    private snack: MatSnackBar,
    private productoService: ProductoService,
    private router: Router,

    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  formSubmit() {
 
    if (this.producto.nombre.trim() === '' || this.producto.nombre == null) {
      this.snack.open("El nombre del producto es requerido !!", '', {
        duration: 3000
      });
      return;
    }
     console.log("let's go");
    const formData = new FormData();
    formData.append('nombre', this.producto.nombre);
    formData.append('precio', this.producto.precio);
    formData.append('descripcion', this.producto.descripcion);
    console.log(this.producto.atributo);
  
    formData.append('version', this.producto.version);
    formData.append('material', this.producto.material);
    formData.append('genero', this.producto.genero);
    formData.append('equipo', this.producto.equipo);
    formData.append('temporada', this.producto.temporada);
  
    formData.append('atributo', this.producto.atributo);
  
    formData.append('categoriaId', this.producto.categoria.categoriaId);
  
    formData.append('imagen1', this.producto.imagen1);
    formData.append('imagen2', this.producto.imagen2);
  
    this.productoService.agregarProducto(
      this.producto.nombre,
      
      
      this.producto.precio,
      this.producto.descripcion,
      this.producto.version,
      this.producto.material,
      this.producto.genero,
      this.producto.equipo,
      this.producto.temporada,
      this.producto.atributo,
      this.producto.imagen1,
      this.producto.imagen2,
      this.producto.categoria.categoriaId
     
    ).subscribe(
      (dato: any) => {
        // Reiniciar los valores del producto 
        console.log("hopla"),
        this.producto = {
          nombre: '',
          precio: '',
          descripcion: '',
          version: '',
          material: '',
          genero: '',
          equipo: '',
          temporada: '',
          atributo: '',
          categoria: {
            categoriaId: '',
          },
          imagen1: undefined,
          imagen2: undefined
        };
  
        Swal.fire(
          'Solicitud de Compra enviada',
          'Se ha enviado su Solicitud de Compra con éxito',
          'success'
        );
        this.router.navigate(['/admin/producto']);
      },
      (error) => {
        console.log(error);
        Swal.fire(
          'Error !!',
          'Error al enviar su solicitud de compra',
          'error'
        );
      }
    );
  }
  

  onFileSelected(event: any) {
    this.producto.imagen1 = event.target.files[0];

  }
  onFileSelected1(event: any) {

    this.producto.imagen2 = event.target.files[0];
  }
  resetForm() {
    this.producto = {
      nombre: '',
      descripcion: '',
      precio: '',
      stok: '',
      talla: '',
      version: '',
      material: '',
      atributo: '',
      equipo: '',
      temporada: '',
      etiqueta: '',

      numero: '',
      categoria: {
        categoriaId: '',
      },

      imagen1: undefined,
      imagen2: undefined
    };
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

}
