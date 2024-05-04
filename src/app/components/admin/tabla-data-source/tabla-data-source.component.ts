import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-data-source',
  templateUrl: './tabla-data-source.component.html',
  styleUrls: ['./tabla-data-source.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablaDataSourceComponent implements OnInit {

  @Input() cabecera: any= [];;//cabecera de la tabla
  @Input() existeCheckColumn: boolean = false;//check de la columna de la tabla
  @Input() datoscheckColumnas: any;//cabecera de la tabla
  @Input()
  datosTabla: any[] = [];;//datos tabla
  @Input()
  relacion: any[] = [];//comparacion columna de la tabla
  @Input()
  size: any[]= [];;//tamaño de la columna
  @Input() paginaSize: any;//tamaño de la pagina
  @Input() editar: boolean;//btnEditar
  @Input() estadosProgramacion: boolean;
  @Input() restaurar: boolean;//btnRestaurar
  @Input() view: boolean;//btnView
  @Input() eliminar: boolean;//btneliminar
  @Input() pago: boolean;//btneliminar
  @Input() print: boolean;//btnprint
  @Input() copia: boolean;//btncopia
  @Input() aprobar: boolean;//btnAprobar
  @Input() desaprobar: boolean;//btnDesaprobar
  @Input() ejecucion: boolean;//btnEjecucion

  @Input() addEjer: boolean;//agregar ejercicio
  @Input() viewEjer: boolean;//consultar ejercicio
  @Input() addCred: boolean;//agregar datos sunat
  @Input() bodyheight: string ;//tamaño de la clase body
  @Input() maxHeight: boolean;//cambiar altura máxima de clase body
  @Input() searchText: string; //texto del buscador
  @Input() pipes: any;//pipe para los textos
  @Input() checkedItems: any; //texto del buscador

  @Input() desabilitado: boolean ;//desabilitar
  @Input() checkedAction: boolean ;//checked in row and generar asiento => doc selecionados

  //datos de salida de los botones

  @Output() btnEditar = new EventEmitter<any>();
  @Output() btnView = new EventEmitter<any>();
  @Output() btnAprobar = new EventEmitter<any>();
  @Output() btnDesaprobar = new EventEmitter<any>();
  @Output() btnEjecucion = new EventEmitter<any>();
  @Output() btnEliminar = new EventEmitter<any>();

  @Output() btnAddEjer = new EventEmitter<any>();
  @Output() btnViewEjer = new EventEmitter<any>();
  @Output() btnMetodoPago = new EventEmitter<any>();

  @Output() btnAddCred = new EventEmitter<any>();
  @Output() btnPrint = new EventEmitter<any>();
  @Output() btnGenAsiento = new EventEmitter<any[]>();

  @Output() insertDocments: any[] = [];
  selection = new SelectionModel<any>(true, []);// select row
  @Output() btnCopia= new EventEmitter<any>();
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] ;

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild('tapMatsor') tapMatsor = new MatSort();

  public ga = '| uppercase';
  tipo: string | undefined;

  constructor(private change: ChangeDetectorRef
  ) {
  }
  checkDatos: any
  ngOnChanges(): void {

    this.checkDatos = this.datosTabla

    // this.checkedItems[columna] = this.checkedItems[columna] ? false : true;

    // console.log(this.checkedItems);
    this.opcionCheck2();
    // this.crearTabla(this.datosTabla);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // checkedItems: {} = undefined;
  ngOnInit(): void {
    this.displayedColumns = this.cabecera;

    if(this.checkedAction){
    for (const property in this.checkedItems) {
      this.tipo = property.slice(0, 2);
      break;
    }
  }
    //  this.checkedItems = this.cabecera.map(item => this.datoscheckColumnas.includes(item));

  }
  crearTabla(datos: any[]) {
    this.dataSource = new MatTableDataSource(datos);
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      if (property.includes('.')) {
        const nestedProperties = property.split('.');
        return nestedProperties.reduce((object, key) => object[key], item);
      } else {
        return item[property];
      }
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;//this.sort;
    //this.paginator.hidePageSize = true para ocultar el pag
    // this.dataSource.paginator.length = datos.length;
  }

  getDataType(columna: any): string {
    console.log(typeof this.relacion[columna])
    return typeof this.relacion[columna];
  }

  aea(obj: { [x: string]: any; }, val: string | number) {
    return obj ? obj[val] : undefined;
  }
  btnDehabilitado: number = -1;
  FuncionbtnEditar(row: any) {
    if (this.desabilitado) {
      this.btnDehabilitado = this.datosTabla.indexOf(row);

    }
    this.btnEditar.emit(row)
  }
  FuncionbtnConsultar(row: any) {
    if (this.desabilitado) {
      this.btnDehabilitado = -1
    }
    this.btnView.emit(row)
  }
  FuncionbtnAprobar(row: any) {
    this.btnAprobar.emit(row)

  }
  FuncionbtnDesaprobar(row: any) {
    this.btnDesaprobar.emit(row)

  }
  FuncionbtnEjecucion(row: any) {
    this.btnEjecucion.emit(row)

  }
  FuncionbtnEliminar(row: any) {
    this.btnEliminar.emit(row)
  }
  FuncionbtnAgregarEjer(row: any) {
    this.btnAddEjer.emit(row)
  }
  FuncionbtnConsultarEjer(row: any) {
    this.btnViewEjer.emit(row)
  }
  FuncionbtnPrint(row: any) {
    this.btnPrint.emit(row)
  }
  FuncionbtnCopia(row:any){
    this.btnCopia.emit(row)
  }
  MetodoDePago(row: any) {
    this.btnMetodoPago.emit(row)
  }

  FuncionbtnAddCredSunt(row: any) {
    this.btnAddCred.emit(row)
  }

  FuncionbtnGenAsiento() {
    console.log(this.insertDocments)
    this.btnGenAsiento.emit(this.insertDocments)
  }

  siEsFecha(valor: any) {
    if (valor == undefined || valor == null) return valor;

    let fecha = valor.toString().split('-');
    if (fecha.length != 3) return valor;

    return `${fecha[2]}/${fecha[1]}/${fecha[0]}`;
  }
  opcionCheck(columna: any) {
    this.checkedItems[columna] = this.checkedItems[columna] ? false : true;

    this.opcionCheck2()

  }

  opcionCheck2() {
    let resultado = []
    let condicion: string = "";
    let inicio: boolean = false;
    let columna: any;
    for (let atributo in this.checkedItems) {

      if (this.checkedItems[atributo]) {
        if (!inicio) {

          condicion = `element['${atributo}'] != ''`;
          inicio = true;
          columna = atributo;
          continue;
        }
        condicion += ` && element['${atributo}'] != ''`;
      }
    }
    if (condicion.length == 0) {
      console.log(condicion)
      this.crearTabla(this.datosTabla);
      return;
    }
    let data = this.datosTabla.filter(
      element => eval(condicion)

    );
    console.log(data)
    console.log(columna)
    resultado = data;
    resultado.sort(function (a, b) {
      console.log(a[columna])
      return a[columna].localeCompare(b[columna]);
    });
    this.crearTabla(resultado);
  }

  // select row for generate
  isAllSelected() {
    return this.selection.selected.length > 0;
  }
  masterToggle(checked: any, columna: string) {
    this.isAllSelected() ? this.clearSelect(checked, columna) : this.selectRows();
  }

  clearSelect(check: any, columna: string) {
    this.selection.clear();
    check.checked = false;
    this.insertDocments = [];
    this.change.detectChanges();
  }

  selectRows() {
    const intIndex = 0;

    for (let index = intIndex; index < this.datosTabla.length; index++) {
      this.selection.select(this.datosTabla[index]);

    }
    this.insertDocments = this.selection.selected;

  }

  selectRow(row: any) {
    console.log(this.tipo)
    if (this.selection.selected.length > 0) {
      let docId = this.selection.selected.reduce((index, d) => {
        let key = `${d[`${this.tipo}_serdoc`]}${d[`${this.tipo}_nrodoc`]}`;
        index[key] = d;
        return index;
      }, {})
      let document = `${row[`${this.tipo}_serdoc`]}${row[`${this.tipo}_nrodoc`]}`;

      if (document in docId) {
        this.selection.deselect(row)
      } else {
        this.selection.select(row);
      }
      docId = {}

    } else {
      this.selection.select(row)
    }

    this.insertDocments = this.selection.selected;
  }


}
