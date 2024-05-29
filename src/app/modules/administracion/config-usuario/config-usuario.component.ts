import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ModalEliminacionComponent } from 'src/app/components/modal/modal-eliminacion/modal-eliminacion.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { VisorConfigUsuarioComponent } from './visor-config-usuario/visor-config-usuario.component';
import { MensajeService } from 'src/app/services/mensaje.service';
import { UserService } from 'src/app/services/user.service';
import { EditConfigUsuarioComponent } from './edit-config-usuario/edit-config-usuario.component';
import { Respuesta } from 'src/app/model/respuesta';
import { RegConfigUsuarioComponent } from './reg-config-usuario/reg-config-usuario.component';

@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit {


  user: any = null;
  xd: any

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private mensajeService: MensajeService,
    private change: ChangeDetectorRef,
    public login: LoginService,
    private servicio: UserService,) {
    this.pageChanged({
      pageIndex: 0, pageSize: this.pageSize,
      length: 0
    });
  }

  ngOnInit(): void {

    this.user = this.login.getUser();
    this.listarUsuario();

  }

  datosTabla: any[] = [];
  pagedData: any[] = [];

  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  totalItems: number;
  pageSize = 5;

  pageChanged(event: PageEvent) {
    console.log(event)
    this.totalItems = this.datosTabla.length
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedData = this.datosTabla.slice(startIndex, endIndex);
  }

  pageSizeChanged() {
    this.paginator.firstPage();
    this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
  }

  eliminar(row: any) {
    console.log(row.us_codigo)
    this.user = this.login.getUser();
    console.log(this.user.us_codigo)
    if (this.user.us_codigo === row.us_codigo) {
      this.mensajeService.MostrarMensaje("Nose puede eliminar usuario que esta loguaedo")
    }
    else {

      const dialogEliminar = this.dialog.open(ModalEliminacionComponent, {
        width: '500px',
        data: {
          row,
          titulo: 'Eliminar',
          subtitulo: `¿Deseas eliminar el usuario ${row.ul_usuario} con el codigo ${row.ul_codigo} ? `
        },

      });
      dialogEliminar.afterClosed().subscribe((respuesta: Respuesta) => {
        if (respuesta?.boton != 'CONFIRMAR') return;
        this.servicio.eliminarUsuario(row.ul_codigo).subscribe(result => {
          console.log(result);
          this.mensajeService.MostrarMensaje("Se elimino correctamente el usuario")
          this.listarUsuario();
        });

      })
    }
    console.log(row);
  }

  visor(row: any) {
    console.log(row.email)
    console.log(typeof row)
    const dialogRef = this.dialog.open(VisorConfigUsuarioComponent, {
      width: '700px',
      height: '430px',
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



  async listarUsuario() {
    this.servicio.obtenerUsuario().subscribe((data) => {
      this.datosTabla = data;
      this.pagedData = data
      this.totalItems = this.datosTabla.length
      this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
      this.getUserInfo()
      this.change.markForCheck();
    });
  }

  volver() {
    this.router.navigate(['/admin']);
  }


  async getUserInfo() {
    this.user = this.login.getUser();
    const userID = this.user.id;
    const usuarios = this.datosTabla.filter(item => item.id === this.user.id);
    this.xd = usuarios
  }

  editar(row: any) {
    this.user = this.login.getUser();
    const dialogRef = this.dialog.open(EditConfigUsuarioComponent, {
      width: '700px',
      height: '430px',
      data: {
        row,
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.listarUsuario();
    })
  }
  operar() {
    this.user = this.login.getUser();
    const dialogRef = this.dialog.open(RegConfigUsuarioComponent, {
      width: '700px',
      height: '430px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.listarUsuario();
    })


  }
}
