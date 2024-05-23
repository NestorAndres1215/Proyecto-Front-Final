import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniaService } from 'src/app/services/compania.service';
import { EditarCompaniaComponent } from './editar-compania/editar-compania.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-conf-compania',
  templateUrl: './conf-compania.component.html',
  styleUrls: ['./conf-compania.component.css']
})
export class ConfCompaniaComponent implements OnInit {

  imagenUrlBase = 'data:image/jpeg;base64,';
  datosTabla: any
  constructor(
    private servicio: CompaniaService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listarcCompania()
  }
  async listarcCompania() {
    this.servicio.obtenerUsuario().subscribe((data) => { this.datosTabla = data; });
  }
  volver() {
    this.router.navigate(['/admin']);
  }
  editarImagen(row: any) {
    console.log(this.datosTabla)
    const dialogRef = this.dialog.open(EditarCompaniaComponent, {
      width: '900px',
      height: '500px',
      data: {
        row
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.listarcCompania()
    })
  } 
  mostrarImagen(perfil: any): string {
    return perfil.com_logo ? this.imagenUrlBase + perfil.com_logo : '';
  }
}




