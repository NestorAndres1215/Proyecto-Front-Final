import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalEliminacionComponent } from 'src/app/components/modal/modal-eliminacion/modal-eliminacion.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit {




  eliminar(row: any) {
    console.log(row.id)
    this.user = this.login.getUser();
    console.log(this.user.id)
    if (this.user.id === row.id) {
      console.log("Se puede nose actualizar")
    }
    else {
 
      const dialogRef = this.dialog.open(ModalEliminacionComponent, {
        width: '500px', 
        data: { row } 
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Elemento eliminado');
        }
      });
    }
    console.log(row);



  }
  visor(row: any) {
    console.log(row)
  }


  datosTabla: any






  constructor(
    private router: Router,
    private dialog: MatDialog,
    public login: LoginService,
    private servicio: UsuarioService,
    private change: ChangeDetectorRef) { }

  ngOnInit(): void {



    this.user = this.login.getUser();
    console.log(this.user)

    this.listarUsuario();
  }

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
  desactivarBotones: boolean = true;
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
