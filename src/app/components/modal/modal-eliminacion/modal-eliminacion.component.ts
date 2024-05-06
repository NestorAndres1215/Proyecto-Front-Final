import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfigUsuarioComponent } from 'src/app/pages/admin/administracion/config-usuario/config-usuario.component';

@Component({
  selector: 'app-modal-eliminacion',
  templateUrl: './modal-eliminacion.component.html',
  styleUrls: ['./modal-eliminacion.component.css']
})
export class ModalEliminacionComponent implements OnInit {

  confirmarEliminar(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  dat: any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<ConfigUsuarioComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  cerrarModal() {
    this.dialogRef.close();
  }
}
