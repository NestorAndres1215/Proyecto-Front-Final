import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit {
editar($event: Event) {
throw new Error('Method not implemented.');
}
eliminar($event: Event) {
throw new Error('Method not implemented.');
}
visor($event: Event) {
throw new Error('Method not implemented.');
}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  nombreMetodoListarGrilla: string = "listarCargaGrilla";

  dataSource!: MatTableDataSource<any>;
  titulo: string = 'Registro de Carga Inicial Conciliacion Bancaria'
  cabecera: any
  datosTabla: any
  relacion: any
  tamanio: any
  banco!: string;
  btnEdit: boolean = true
  btnView: boolean = true
  btnEliminar: boolean = true
  pageSize: any;
filtrar($event: string) {
throw new Error('Method not implemented.');
}
agregarCompania() {
throw new Error('Method not implemented.');
}




  constructor(private servicio: UsuarioService,
    private change: ChangeDetectorRef) { }

  ngOnInit(): void {this.FuncionTableReutilizable();
     this.servicio.obtenerUsuario().subscribe(
      data => {
        console.log(data);
        this.datosTabla= data; 
        this.change.markForCheck();
      },
      error => {
      
        console.error('Error al obtener datos:', error);
      }
    );
    this.servicio.obtenerUsuario().subscribe((data) => {

      //this.spinnerService.OcultarSpinner()
      this.datosTabla = data;
      //this.lista = data;
      this.change.markForCheck();
    }, (error) => {
      //this.spinnerService.OcultarSpinner();
      //this.mensaje.MostrarMensaje('Ucorrio un error');

    }
    );
  }
  //pageSize = 10; 
  //pageSizeOptions = [5, 10, 25, 50]; 

  listarUsuario() {
   
  }


  FuncionTableReutilizable() {
    this.cabecera = ['username']; //,
    this.relacion = { username: "username"}
    this.tamanio = ['5'],
      this.pageSize = [12, 14, 16, 20]
    this.change.markForCheck()
  }
}
