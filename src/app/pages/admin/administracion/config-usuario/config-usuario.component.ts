import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalEliminacionComponent } from 'src/app/components/modal/modal-eliminacion/modal-eliminacion.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { VisorConfigUsuarioComponent } from './visor-config-usuario/visor-config-usuario.component';
import { MensajeService } from 'src/app/services/mensaje.service';
import { FuncionService } from 'src/app/services/funcion.service';
@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private mensajeService: MensajeService,
    private funcionService: FuncionService,
    public login: LoginService,
    private servicio: UsuarioService,
    private change: ChangeDetectorRef) { }

  ngOnInit(): void {



    this.user = this.login.getUser();
    console.log(this.user)

    this.listarUsuario();
  }


  eliminar(row: any) {
    console.log(row.id)
    this.user = this.login.getUser();
    console.log(this.user.id)
    if (this.user.id === row.id) {
      this.mensajeService.MostrarMensaje("Nose puede eliminar usuario que esta loguaedo")
    }
    else {

      const dialogRef = this.dialog.open(ModalEliminacionComponent, {
        width: '500px',
        data: {
          row,
          titulo: 'Eliminar',
          subtitulo: `¿Deseas eliminar el usuario ${row.username} ? `
        },

      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Elemento eliminado');
        }
      });
    }
    console.log(row);



  }
  /*
    eliminar(cargaInicial: CargaInicial) {
      console.log(cargaInicial)
      const dialogEliminar = this.dialog.open(EliminarModalComponent, {
        width: '400px',
        data: {
          titulo: 'Eliminar',
          subtitulo: `¿Deseas eliminar conciliación Bancaria ${cargaInicial.bc_codban} del periodo ${cargaInicial.bc_periodo}?`
        }
      });
  
      dialogEliminar.afterClosed().subscribe((respuesta: respuesta) => {
        if (respuesta?.boton != 'CONFIRMAR') return;
  
        this.cargainicialService.eliminarBini(cargaInicial.bc_secue, cargaInicial.bc_codban).subscribe(data => {
          console.log(cargaInicial);
          if (data['mensaje'] == "Eliminado correctamente") {
            this.detector.detectChanges();
            this.cargainicialService.setMensajeCambio("Carga Inicial eliminado correctamente.");
  
            this.cargainicialService.getFiltro1("").subscribe((data) => {
              console.log(data);
              this.dataExp = data;
              this.datosTabla = data;
              this.change.markForCheck();
  
            });
          } else {
            this.cargainicialService.setMensajeCambio("Error al eliminar el centro de costo.");
          }
        });
  
      })
    }*/
  visor(row: any) {
    console.log(row.email)
    console.log(row)
    const dialogRef = this.dialog.open(VisorConfigUsuarioComponent, {
      width: '700px',
      height: '380px',
      data: {
        row,

        email: row.email,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Elemento eliminado');
      }
    });

  }
 
  datosTabla: any








  user: any = null;



  async listarUsuario() {
    this.servicio.obtenerUsuario().subscribe((data) => {

      this.datosTabla = data;
      console.log(this.datosTabla)
      this.getUserInfo()
      this.change.markForCheck();
    }, (error) => {


    }
    );
  }



  volver() {
    this.router.navigate(['/admin']); // Esto redirigirá a la pantalla principal
  }

  xd: any
  async getUserInfo() {
    this.user = this.login.getUser();
    console.log(this.user.id)
    console.log(this.datosTabla)
    const userID = this.user.id;
    const usuarios = this.datosTabla.filter(item => item.id === this.user.id);
    console.log(usuarios);
    this.xd = usuarios
  }
  editar(row: any) {
    console.log(row.id)
    this.user = this.login.getUser();
    console.log(this.user.id)
    if (this.user.id === row.id) {
      console.log("Se puede nose actualizar")
    }
    else {
      console.log("Se puede puede actualizar")
    }
  }
}
