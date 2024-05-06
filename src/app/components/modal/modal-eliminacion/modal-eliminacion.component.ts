import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ConfigUsuarioComponent } from 'src/app/pages/admin/administracion/config-usuario/config-usuario.component';
import { Respuesta }  from 'src/app/model/respuesta';
@Component({
  selector: 'app-modal-eliminacion',
  templateUrl: './modal-eliminacion.component.html',
  styleUrls: ['./modal-eliminacion.component.css']
})
export class ModalEliminacionComponent implements OnInit {
  
  titulo: string = "";
  subtitulo: string = "";
  razon: string = "";
  meses: any[] = [];
  mesActual: string = "";
  mesCambio: string = "";

  constructor(private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private data: any,
 
    private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    console.log("🙌")
    this.titulo = this.data['titulo'];
    this.subtitulo = this.data['subtitulo'];
    this.razon = this.data['razon'];
  

  }

  close(mensaje: string): void {
    const respuesta: Respuesta = {
      boton: mensaje,
      razon: this.razon,
    }
  
    this.dialogRef.close(respuesta);
  }
  getHTML(): SafeHtml {
    return  this.sanitizer.bypassSecurityTrustHtml(this.subtitulo + this.mesActual + this.mesCambio);
  }
/*
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
  }*/
}
