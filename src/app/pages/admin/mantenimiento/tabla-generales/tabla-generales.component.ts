import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { GeneralesService } from 'src/app/services/generales.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-tabla-generales',
  templateUrl: './tabla-generales.component.html',
  styleUrls: ['./tabla-generales.component.css']
})
export class TablaGeneralesComponent implements OnInit {
eliminar(_t20: any) {
throw new Error('Method not implemented.');
}
visor(_t20: any) {
throw new Error('Method not implemented.');
}
editar(_t20: any) {
throw new Error('Method not implemented.');
}

  constructor(private router:Router, private dialog: MatDialog,
    private mensajeService: MensajeService,
    private change: ChangeDetectorRef,private servicio:GeneralesService) { }
  datosTabla: any[] = [];
  pagedData: any[] = [];

  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  totalItems: number;
  pageSize = 5;

  ngOnInit(): void {
    this.listarUsuario();
  }

  async listarUsuario() {
    this.servicio.obtenerGeneral().subscribe((data) => {
      this.datosTabla = data;
      this.pagedData = data
      this.totalItems = this.datosTabla.length
      this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });

      this.change.markForCheck();
    });
  }
  volver() {
    this.router.navigate(['/admin']);
  }
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
}
