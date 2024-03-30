import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  // datos de entrada
  @Input()
  title!: string;
  @Input()
  exist_excel: boolean = false;
  @Input()
  exist_file: boolean = false;
  @Input()
  exist_visor: boolean = false;
  @Input()
  exist_search: boolean | undefined ;
  
  @Input()
  exist_add!: boolean;
  @Input()
  redirectCompras: boolean = false;
  @Input()
  redirecUrl!: string;
  @Input() returnRedirecUrl:string='/';

  @Input()
  exist_finalizar: boolean = false;
  @Input()
  exist_sunat: boolean = false;
  @Input()
  input_anio!: string;
  @Input()
  clienteInp!: string;
  @Input()
  nameInp!: string;
  @Input()
  select: boolean = false;
  @Input()
  check: boolean = false;
  @Input()
  consulta_grilla: boolean = false;
  @Input()
  consulta_document: boolean = false;

  @Input()
  exist_detraccion: boolean = false;
  @Input()
  exist_txt: boolean = false;
  @Input()
  exist_success: boolean = false;

  @Input() prevRoute: boolean = false;

  // datos de salida
  @Output() search = new EventEmitter<string>();
  @Output() open = new EventEmitter();
  @Output() finaliza = new EventEmitter();
  @Output() excel = new EventEmitter();
  @Output() visor = new EventEmitter();
  @Output() file = new EventEmitter();
  @Output() sunat = new EventEmitter();
  @Output() meses = new EventEmitter<string>();
  @Output() detraccion = new EventEmitter();
  @Output() txt = new EventEmitter();
  @Output() success = new EventEmitter();
  @Output() checked = new EventEmitter();
  @Output() consultar = new EventEmitter();
  @Output() consultardoc = new EventEmitter();

  // other
  mes: any;
  form!: UntypedFormGroup;
  // formCheck:UntypedFormGroup;
  cambiarInput: boolean = false;
  ocultar: boolean = false;
  justify_end: boolean = false;

  constructor(
    private location: Location,
    private formBuilder: UntypedFormBuilder
  ) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

 

    

    window.addEventListener('resize', this.handleResize);

    if (!this.exist_search && (!this.exist_add || !this.exist_excel || this.exist_visor)) {
      this.justify_end = true;
    } else {
      this.justify_end = false;
    }
  }

  filtrar(event: any) {
    const newData = event.target.value;
    this.search.emit(newData);
  }

  openModalAdd() {
    this.open.emit()
  }

  exportarAExcel() {
    this.excel.emit()
  }

  abrirVisor() {
    this.visor.emit()
  }
  backPrevRoute(){
    this.location.back();
  }
  onChange(mes: any) {
    const newMes = mes.target.value;
    this.meses.emit(newMes)
  }

  finalizar() {
    this.finaliza.emit();
  }

  generarArchivo() {
    this.file.emit();
  }
  Detraccion() {
    this.detraccion.emit();
  }
  GenerarTxt() {
    this.txt.emit();
  }
  Success(){
    this.success.emit();

  }
  ///-----no funciona-------///

  abrirSunat() {
    this.sunat.emit();
  }


  cheque(event:any){
    this.checked.emit(event)
  }


  abrirModalConsultaAsiento(){
    this.consultar.emit();
  }

  abrirModalConsultaDocumento(){
    this.consultardoc.emit();
  }

  ///-----no funciona-------///

  handleResize() {
    const w = window.innerWidth;
    if (w > 850) {
      this.cambiarInput = false;
      this.ocultar = true;

    } else {
      this.cambiarInput = true;
      this.ocultar = false;
    }
  }
}
