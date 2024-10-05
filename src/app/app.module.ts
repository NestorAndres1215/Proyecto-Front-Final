import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

//importaciones de angular material
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';


//importacion del component
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { SignupComponent } from './config/signup/signup.component';
import { LoginComponent } from './config/login/login.component';
import { HomeComponent } from './config/home/home.component';
import { authInterceptorProviders } from './interceptor/auth.interceptor';


import { ModalEliminacionComponent } from './components/modal/modal-eliminacion/modal-eliminacion.component';

import { ModalPerfilComponent } from './components/modal/modal-perfil/modal-perfil.component';
import { ModalSunatComponent } from './components/modal/modal-sunat/modal-sunat.component';

import { FooterAdministradorComponent } from './components/footer/footer-administrador/footer-administrador.component';
import { CabeceraAdministradorComponent } from './components/cabecera/cabecera-administrador/cabecera-administrador.component';
import { CabeceraClienteComponent } from './components/cabecera/cabecera-cliente/cabecera-cliente.component';
import { FooterClienteComponent } from './components/footer/footer-cliente/footer-cliente.component';
import { CommonModule } from '@angular/common';

import { ModoCambiarRolComponent } from './components/modo-cambiar-rol/modo-cambiar-rol.component';

import { CabeceraModoComponent } from './components/cabecera/cabecera-modo/cabecera-modo.component';

import { ModalDesactivacionComponent } from './components/modal/modal-desactivacion/modal-desactivacion.component';
import { ModalActivacionComponent } from './components/modal/modal-activacion/modal-activacion.component';
import { FooterComponent } from './components/cliente/footer/footer.component';
import { AdministracionComponent } from './modules/administracion/administracion.component';
import { ConfCompaniaComponent } from './modules/administracion/conf-compania/conf-compania.component';
import { EditarCompaniaComponent } from './modules/administracion/conf-compania/editar-compania/editar-compania.component';
import { ConfEmpresaComponent } from './modules/administracion/conf-empresa/conf-empresa.component';
import { ConfigPerfilComponent } from './modules/administracion/config-perfil/config-perfil.component';
import { VisorPerfilComponent } from './modules/administracion/config-perfil/visor-perfil/visor-perfil.component';
import { ConfigPlantillaComponent } from './modules/administracion/config-plantilla/config-plantilla.component';
import { ConfigUsuarioComponent } from './modules/administracion/config-usuario/config-usuario.component';
import { EditConfigUsuarioComponent } from './modules/administracion/config-usuario/edit-config-usuario/edit-config-usuario.component';
import { RegConfigUsuarioComponent } from './modules/administracion/config-usuario/reg-config-usuario/reg-config-usuario.component';
import { VisorConfigUsuarioComponent } from './modules/administracion/config-usuario/visor-config-usuario/visor-config-usuario.component';
import { AsientoCompraComponent } from './modules/asiento/asiento-compra/asiento-compra.component';
import { AsientoVentaComponent } from './modules/asiento/asiento-venta/asiento-venta.component';
import { ConsultaCompraComponent } from './modules/consulta/consulta-compra/consulta-compra.component';
import { ConsultaDescuentoComponent } from './modules/consulta/consulta-descuento/consulta-descuento.component';
import { ConsultaProductoComponent } from './modules/consulta/consulta-producto/consulta-producto.component';
import { ConsultaPromocionComponent } from './modules/consulta/consulta-promocion/consulta-promocion.component';
import { ConsultaProveedorComponent } from './modules/consulta/consulta-proveedor/consulta-proveedor.component';
import { ConsultaVentaComponent } from './modules/consulta/consulta-venta/consulta-venta.component';
import { ConsultaComponent } from './modules/consulta/consulta.component';
import { EstadoSituacionFinancieraComponent } from './modules/estado-situacion-financiera/estado-situacion-financiera.component';
import { RegEstadoSituacionFinancieraComponent } from './modules/estado-situacion-financiera/reg-estado-situacion-financiera/reg-estado-situacion-financiera.component';
import { DashboardComponent } from './modules/home-admin/home-admin.component';
import { MaestraComponent } from './modules/maestra/maestra.component';
import { RegTablaGeneralesDetallleComponent } from './modules/maestra/tabla-generales/tabla-generales-detalle/reg-tabla-generales-detallle/reg-tabla-generales-detallle.component';
import { TablaGeneralesDetalleComponent } from './modules/maestra/tabla-generales/tabla-generales-detalle/tabla-generales-detalle.component';
import { VisorTablaDetalleComponent } from './modules/maestra/tabla-generales/tabla-generales-detalle/visor-tabla-detalle/visor-tabla-detalle.component';
import { TablaGeneralesComponent } from './modules/maestra/tabla-generales/tabla-generales.component';
import { VisorTablaGeneralesComponent } from './modules/maestra/tabla-generales/visor-tabla-generales/visor-tabla-generales.component';

import { MantenimientoCategoriaComponent } from './modules/mantenimiento/mantenimiento-categoria/mantenimiento-categoria.component';
import { MantenimientoContenidoComponent } from './modules/mantenimiento/mantenimiento-contenido/mantenimiento-contenido.component';
import { MantenimientoDescuentoComponent } from './modules/mantenimiento/mantenimiento-descuento/mantenimiento-descuento.component';
import { MantenimientoProductoComponent } from './modules/mantenimiento/mantenimiento-producto/mantenimiento-producto.component';
import { MantenimientoPromocionComponent } from './modules/mantenimiento/mantenimiento-promocion/mantenimiento-promocion.component';
import { MantenimientoProveedorComponent } from './modules/mantenimiento/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MantenimientoComponent } from './modules/mantenimiento/mantenimiento.component';
import { ProgramacionComponent } from './modules/programacion/programacion.component';
import { RegProgramacionCompraComponent } from './modules/programacion/reg-programacion-compra/reg-programacion-compra.component';
import { RegProgramacionVentaComponent } from './modules/programacion/reg-programacion-venta/reg-programacion-venta.component';
import { RegComprasComponent } from './modules/reporte/reg-compras/reg-compras.component';
import { RegProductoComponent } from './modules/reporte/reg-producto/reg-producto.component';
import { RegPromocionComponent } from './modules/reporte/reg-promocion/reg-promocion.component';
import { RegReclamoComponent } from './modules/reporte/reg-reclamo/reg-reclamo.component';
import { ReporteComponent } from './modules/reporte/reporte.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { TipoCambioComponent } from './modules/maestra/tipo-cambio/tipo-cambio.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HomeClienteComponent,
    FooterComponent,
 
    ReporteComponent,
    RegComprasComponent,
    ReporteComponent,
    AsientoCompraComponent,
    AsientoVentaComponent,
    ProgramacionComponent,
    RegReclamoComponent,
    RegPromocionComponent,
    VisorTablaGeneralesComponent,
    TablaGeneralesDetalleComponent,
    RegProductoComponent,
    RegProgramacionVentaComponent,
    RegProgramacionCompraComponent,
    AdministracionComponent,
    ConfigUsuarioComponent,
    ConfigPerfilComponent,
MantenimientoComponent,
    TablaGeneralesComponent,

    MantenimientoPromocionComponent,
    MantenimientoProveedorComponent,
    MantenimientoCategoriaComponent,
    MantenimientoDescuentoComponent,
    MantenimientoContenidoComponent,
    MantenimientoProductoComponent,
    ConsultaComponent,
    ConsultaPromocionComponent,
    ConsultaProveedorComponent,
    ConsultaCompraComponent,
    ConsultaVentaComponent,
    ConsultaDescuentoComponent,
    ConsultaProductoComponent,
    EstadoSituacionFinancieraComponent,
    RegEstadoSituacionFinancieraComponent,
    ModalEliminacionComponent,
    VisorConfigUsuarioComponent,
    RegConfigUsuarioComponent,
    EditConfigUsuarioComponent,
    ConfEmpresaComponent,
    VisorPerfilComponent,
    ModalPerfilComponent,
    ConfigUsuarioComponent,
    ConfCompaniaComponent,
    ConfigPlantillaComponent,
    HomeClienteComponent,
    EditarCompaniaComponent,

    ModalSunatComponent,
    MaestraComponent,

    CabeceraAdministradorComponent,
    FooterAdministradorComponent,
    CabeceraClienteComponent,
    FooterClienteComponent,
    VisorTablaDetalleComponent,
    ModoCambiarRolComponent,
    CabeceraModoComponent,
    ModalDesactivacionComponent,
    ModalActivacionComponent,
    TipoCambioComponent,
    RegTablaGeneralesDetallleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatExpansionModule,
    MatListModule,
    MatSortModule,
    CommonModule ,
    MatGridListModule,
    MatOptionModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatPaginatorModule,
    FormsModule, // Si estás usando formularios basados en plantillas
    ReactiveFormsModule, // Si estás usando formularios reactivos

  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }