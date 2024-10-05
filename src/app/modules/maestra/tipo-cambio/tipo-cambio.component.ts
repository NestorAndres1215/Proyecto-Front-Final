import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { GeneralesService } from 'src/app/services/generales.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { TipoCambioService } from 'src/app/services/tipo-cambio.service';
@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {
  meses: any;
  listaMes: any[] = [
    '01 - ENERO',
    '02 - FEBRERO',
    '03 - MARZO',
    '04 - ABRIL',
    '05 - MAYO',
    '06 - JUNIO',
    '07 - JULIO',
    '08 - AGOSTO',
    '09 - SEPTIEMBRE',
    '10 - OCTUBRE',
    '11 - NOVIEMBRE',
    '12 - DICIEMBRE'
  ];
  listaAño: any;
  form: UntypedFormGroup;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  totalItems: number;
  pageSize = 5;
  datosTabla: any;
  pagedData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: TipoCambioService,
    private router: Router,
    private dialog: MatDialog,
    private servicio: GeneralesService,
    private mensajeService: MensajeService,
    private change: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario()
    this.incluirMesActual();
  }

  formulario() {
    this.form = this.formBuilder.group({
      mes: ['']
    });
  }
  incluirMesActual(): void {
    const meses = this.listaMes
    const mesActual = meses[new Date().getMonth()];

    if (!this.listaMes.includes(mesActual)) {
      this.listaMes.push(mesActual);
      this.listaMes.sort((a, b) => meses.indexOf(a) - meses.indexOf(b));

    }


    if (!this.form.get('mes')?.value) {
      this.form.get('mes')?.setValue(mesActual);
      this.meses = mesActual.split(' - ')[0];
      this.listarData(this.meses);
    }
  }


  ListarMes(): void {
    const valorMes = this.form.get('mes').value;
    this.meses = valorMes.split(' - ')[0];
    this.listarData(this.meses);
  }

  listarData(mes: String): void {

    this.service.tipoCambio("2024", mes).subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          this.datosTabla = data.map((item, index) => ({
            ...item,
            codigo: (index + 1).toString().padStart(4, '0')

          }));
          console.log(this.datosTabla)
          this.pagedData = this.datosTabla;
          this.totalItems = this.datosTabla.length;
          this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
          this.change.markForCheck();
        } else {
          console.error('Data is not an array:', data);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  pageChanged(event: PageEvent): void {
    console.log(event);
    this.totalItems = this.datosTabla.length;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedData = this.datosTabla.slice(startIndex, endIndex);
  }

  pageSizeChanged(): void {
    this.paginator.firstPage();
    this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
  }

  volver() {
    this.router.navigate(['/admin']);
  }

}


