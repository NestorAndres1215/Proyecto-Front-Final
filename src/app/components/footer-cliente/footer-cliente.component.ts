import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompaniaService } from 'src/app/services/compania.service';

@Component({
  selector: 'app-footer-cliente',
  templateUrl: './footer-cliente.component.html',
  styleUrls: ['./footer-cliente.component.css']
})
export class FooterClienteComponent implements OnInit {

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
  mostrarImagen(perfil: any): string {
    return perfil.com_logo ? this.imagenUrlBase + perfil.com_logo : '';
  }
}
