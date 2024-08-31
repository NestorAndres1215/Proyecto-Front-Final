import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { TablaGeneralesComponent } from '../tabla-generales.component';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MensajeService } from 'src/app/services/mensaje.service';
import { UserService } from 'src/app/services/user.service';
import { GeneralesService } from 'src/app/services/generales.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { VisorTablaDetalleComponent } from './visor-tabla-detalle/visor-tabla-detalle.component';

@Component({
  selector: 'app-tabla-generales-detalle',
  templateUrl: './tabla-generales-detalle.component.html',
  styleUrls: ['./tabla-generales-detalle.component.css']
})
export class TablaGeneralesDetalleComponent implements OnInit {
  editar(_t17: any) {
    throw new Error('Method not implemented.');
  }

  eliminar(_t17: any) {
    throw new Error('Method not implemented.');
  }


  codigo: String;
  nombre: String;
  datosTabla: any[] = [];
  pagedData: any[] = [];

  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  totalItems: number;
  pageSize = 5;

  constructor(
    private dialogRe: MatDialogRef<TablaGeneralesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private mensajeService: MensajeService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef,
    private servicio: GeneralesService,
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.data.row.tl_codigo)
    this.codigo = this.data.row.tl_codigo
    this.nombre = this.data.row.tl_descri1
    this.listartablagenerales()
  }
  volver() {
    this.dialogRe.close();
  }

  async listartablagenerales() {
    this.servicio.obtenerGeneralDetalle(this.codigo).subscribe((data) => {
      this.datosTabla = data;
      this.pagedData = data
      this.totalItems = this.datosTabla.length
      console.log(this.pageSize)
      this.pageSize=5
      this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });

      this.change.markForCheck();
    });
  }

  pageSizeChanged() {
    this.paginator.firstPage();
    this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
  }

  pageChanged(event: PageEvent) {
    console.log(event)
    this.totalItems = this.datosTabla.length
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedData = this.datosTabla.slice(startIndex, endIndex);
  }

  visor(row: any) {
    const dialogRef = this.dialog.open(VisorTablaDetalleComponent, {
      width: '500px',
      height: '370px',
      data: {
        row,
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.listartablagenerales();
      this.pageChanged({ pageIndex: 0, pageSize: 5, length: this.totalItems });
    })
  }
}
