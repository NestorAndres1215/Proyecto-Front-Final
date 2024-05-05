import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

//importaciones de angular material
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
//importacion del component
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { SignupComponent } from './pages/configuracion/signup/signup.component';
import { LoginComponent } from './pages/configuracion/login/login.component';
import { HomeComponent } from './pages/configuracion/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/home-admin/home-admin.component';
import { UserDashboardComponent } from './pages/cliente/home-cliente/home-cliente.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './components/cliente/footer/footer.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



import { PrincipalComponent } from './pages/admin/principal/principal.component';



import { NgxPaginationModule } from 'ngx-pagination';
import { MatDividerModule } from '@angular/material/divider';

import { AsientoComponent } from './pages/admin/asiento/asiento.component';
import { ReporteComponent } from './pages/admin/reporte/reporte.component';



import { AsientoCompraComponent } from './pages/admin/asiento/asiento-compra/asiento-compra.component';
import { AsientoVentaComponent } from './pages/admin/asiento/asiento-venta/asiento-venta.component';
import { ProgramacionComponent } from './pages/admin/programacion/programacion.component';
import { RegComprasComponent } from './pages/admin/reporte/reg-compras/reg-compras.component';
import { RegReclamoComponent } from './pages/admin/reporte/reg-reclamo/reg-reclamo.component';
import { RegPromocionComponent } from './pages/admin/reporte/reg-promocion/reg-promocion.component';
import { RegProductoComponent } from './pages/admin/reporte/reg-producto/reg-producto.component';
import { RegProgramacionVentaComponent } from './pages/admin/programacion/reg-programacion-venta/reg-programacion-venta.component';
import { RegProgramacionCompraComponent } from './pages/admin/programacion/reg-programacion-compra/reg-programacion-compra.component';
import { AdministracionComponent } from './pages/admin/administracion/administracion.component';
import { ConfigUsuarioComponent } from './pages/admin/administracion/config-usuario/config-usuario.component';
import { ConfigPerfilComponent } from './pages/admin/administracion/config-perfil/config-perfil.component';
import { MantenimientoComponent } from './pages/admin/mantenimiento/mantenimiento.component';
import { TablaGeneralesComponent } from './pages/admin/mantenimiento/tabla-generales/tabla-generales.component';
import { TablaResenaComponent } from './pages/admin/mantenimiento/tabla-resena/tabla-resena.component';
import { MantenimientoPromocionComponent } from './pages/admin/mantenimiento/mantenimiento-promocion/mantenimiento-promocion.component';
import { MantenimientoProveedorComponent } from './pages/admin/mantenimiento/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MantenimientoCategoriaComponent } from './pages/admin/mantenimiento/mantenimiento-categoria/mantenimiento-categoria.component';
import { MantenimientoDescuentoComponent } from './pages/admin/mantenimiento/mantenimiento-descuento/mantenimiento-descuento.component';
import { MantenimientoContenidoComponent } from './pages/admin/mantenimiento/mantenimiento-contenido/mantenimiento-contenido.component';
import { MantenimientoProductoComponent } from './pages/admin/mantenimiento/mantenimiento-producto/mantenimiento-producto.component';
import { ConsultaComponent } from './pages/admin/consulta/consulta.component';
import { ConsultaPromocionComponent } from './pages/admin/consulta/consulta-promocion/consulta-promocion.component';
import { ConsultaProveedorComponent } from './pages/admin/consulta/consulta-proveedor/consulta-proveedor.component';
import { ConsultaCompraComponent } from './pages/admin/consulta/consulta-compra/consulta-compra.component';
import { ConsultaVentaComponent } from './pages/admin/consulta/consulta-venta/consulta-venta.component';
import { ConsultaDescuentoComponent } from './pages/admin/consulta/consulta-descuento/consulta-descuento.component';
import { ConsultaProductoComponent } from './pages/admin/consulta/consulta-producto/consulta-producto.component';
import { EstadoSituacionFinancieraComponent } from './pages/admin/estado-situacion-financiera/estado-situacion-financiera.component';
import { RegEstadoSituacionFinancieraComponent } from './pages/admin/estado-situacion-financiera/reg-estado-situacion-financiera/reg-estado-situacion-financiera.component';

import { DinamoPipePipe } from './pipe/dinamo-pipe.pipe';
import { MatSortModule } from '@angular/material/sort';
import { ModalEliminacionComponent } from './components/modal/modal-eliminacion/modal-eliminacion.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    FooterComponent,

    PrincipalComponent,
 
 
    AsientoComponent,
   ReporteComponent,
  RegComprasComponent,
    ReporteComponent,

    AsientoCompraComponent,
    AsientoVentaComponent,
    ProgramacionComponent,
    RegReclamoComponent,
    RegPromocionComponent,
    RegProductoComponent,
    RegProgramacionVentaComponent,
    RegProgramacionCompraComponent,
    AdministracionComponent,
    ConfigUsuarioComponent,
    ConfigPerfilComponent,
    MantenimientoComponent,
    TablaGeneralesComponent,
    TablaResenaComponent,
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

   
    DinamoPipePipe,
           ModalEliminacionComponent,
  
  
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