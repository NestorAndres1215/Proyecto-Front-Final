import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfCompaniaComponent } from '../conf-compania.component';
import { Compania } from 'src/app/model/compania';
import { CompaniaService } from 'src/app/services/compania.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-editar-compania',
  templateUrl: './editar-compania.component.html',
  styleUrls: ['./editar-compania.component.css']
})
export class EditarCompaniaComponent implements OnInit {

  imagenUrlBase = 'data:image/jpeg;base64,';
  public formulario: UntypedFormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRe: MatDialogRef<ConfCompaniaComponent>,
    private service: CompaniaService,
    private cdr: ChangeDetectorRef,
    private mensajeService: MensajeService,
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,) { }
  nombre: string
  ruc: string
  email: string
  telefono: string
  direccion: string
  pais: string
  sector: string
  descripcion: string
  logo: File | undefined;
  fecha: string
  ngOnInit(): void {

    this.logo = this.data.row.com_logo
    console.log(typeof this.data.row.com_logo)
    console.log(this.data.row.com_fecha_de_fundacion)
    this.fecha = this.data.row.com_fecha_de_fundacion
    this.nombre = this.data.row.com_nombre
    this.ruc = this.data.row.com_ruc
    this.telefono = this.data.row.com_telefono
    this.email = this.data.row.com_correo
    this.pais = this.data.row.com_pais
    this.direccion = this.data.row.com_direccion
    this.sector = this.data.row.com_sector
    this.descripcion = this.data.row.com_descripcion


    this.initForm()
  }

  defaultFileName: string = 'imagen.png'; // Nombre del archivo por defecto

  get selectedFileName(): string {
    return this.selectedFile ? this.selectedFile.name : this.defaultFileName;
  }
  mostrarImagen(perfil: any): string {
    return this.data.row.com_logo ? this.imagenUrlBase + this.data.row.com_logo : '';
  }
  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      ruc: [this.ruc, Validators.required],
      email: [this.email, [Validators.required]],
      pais: [this.pais, Validators.required],
      sector: [this.sector, Validators.required],
      fecha: [this.fecha, [Validators.required]],
      telefono: [this.telefono, Validators.required],
      direccion: [this.direccion, Validators.required],
      descripcion: [this.descripcion, Validators.required],
    });
  }

  cerrar() {
    this.dialogRe.close();
  }
  selectedFile: File | undefined;
  imageUrl: string | ArrayBuffer | null = null; // Variable para la URL de la imagen

  imagen() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.logo);
  }
  defaultImageUrl: string = 'assets/image/components/icono-perfil.jpg';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      console.log(this.selectedFile)
      // Obtener la URL del objeto File seleccionado
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      // Mantener this.imageUrl como this.logo si no se selecciona ningún archivo
      this.imageUrl = this.logo ? URL.createObjectURL(this.logo) : 'ruta/a/tu/logo/por/defecto.png';
      console.log(this.imageUrl)
    }
  }

  operar() {
    const formValues = this.formulario.value;
    let logo = new File(
      [new Blob()],
      'imagen.jpeg',
      { type: 'image/jpeg' }
    );

    if (this.selectedFile == null) {
      formValues.logo = logo
    }
    else {
      formValues.logo = this.selectedFile
    }
    if (this.formulario.valid) {

      const registrar = {
        com_codigo: '001',
        com_nombre: formValues.nombre,
        com_ruc: formValues.ruc,
        com_telefono: formValues.telefono,
        com_correo: formValues.email,
        com_direccion: formValues.direccion,
        com_pais: formValues.pais,
        com_sector: formValues.sector,
        com_fecha_de_fundacion: formValues.fecha,
        com_descripcion: formValues.descripcion,
        com_logo: formValues.logo,
      };

      console.log(registrar)
    
      this.service.actualizarCategoria(registrar.com_codigo, registrar).subscribe(
        () => {
          this.formulario.reset();
          this.cdr.detectChanges();
          this.mensajeService.MostrarMensaje('Se Registró el Usuario');
          this.dialog.closeAll();
          this.cdr.markForCheck();
        },
        error => {
          this.mensajeService.MostrarBodyError(error)
  
        }
      );
      
    }

  }
}
