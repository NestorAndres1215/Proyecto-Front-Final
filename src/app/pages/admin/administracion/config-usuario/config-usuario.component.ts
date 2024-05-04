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
displayedColumns: any;
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
  paginaSize: any;
filtrar($event: string) {
throw new Error('Method not implemented.');
}
agregarCompania() {
throw new Error('Method not implemented.');
}




  constructor(private servicio: UsuarioService,
    private change: ChangeDetectorRef) { }

    ngOnInit(): void {
      this.listarUsuario(); // Agrega paréntesis para llamar a la función
      this.FuncionTableReutilizable(); // Agrega paréntesis para llamar a la función
    }
    
pageSize = 10; 
  pageSizeOptions = [5, 10, 25, 50]; 

  listarUsuario() {
      this.servicio.obtenerUsuario().subscribe((data) => {

      //this.spinnerService.OcultarSpinner()
      this.datosTabla = data;
      console.log(this.datosTabla)
      //this.lista = data;
      this.change.markForCheck();
    }, (error) => {
      //this.spinnerService.OcultarSpinner();
      //this.mensaje.MostrarMensaje('Ucorrio un error');

    }
    );
  }


  FuncionTableReutilizable() {
    this.cabecera = ['Usuario'];
    this.relacion = { Usuario: "username" };
    this.tamanio = ['5'];
    this.paginaSize = [12, 14, 16, 20];
    this.change.markForCheck();
  }
  
}
