import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service'; 
import { HttpClient } from '@angular/common/http';
import  Swal  from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarioRoles: any[] = [];

  constructor(private usuarioRolService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarioRoles();
  }

  obtenerUsuarioRoles(): void {
    this.usuarioRolService.obtenerAdminUsuarioRoles().subscribe(
      (usuarioRoles: any[]) => {
        this.usuarioRoles = usuarioRoles;
      },
      (error: any) => {
        console.error('Error al obtener los usuario-roles', error);
      }
    );
  }
  pageSize = 3; // Tamaño de página (número de elementos por página)
  pageIndex = 1; // 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
