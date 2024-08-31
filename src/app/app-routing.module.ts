import { NormalGuard } from './guard/normal.guard';
import { AdminGuard } from './guard/admin.guard';

import { DashboardComponent } from './modules/home-admin/home-admin.component';
import { LoginComponent } from './config/login/login.component';
import { SignupComponent } from './config/signup/signup.component';
import { HomeComponent } from './config/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modules/principal/principal.component';
import { AsientoCompraComponent } from './modules/asiento/asiento-compra/asiento-compra.component';
import { AsientoVentaComponent } from './modules/asiento/asiento-venta/asiento-venta.component';

import { TablaResenaComponent } from './modules/maestra/tabla-resena/tabla-resena.component';
import { MantenimientoPromocionComponent } from './modules/mantenimiento/mantenimiento-promocion/mantenimiento-promocion.component';
import { MantenimientoDescuentoComponent } from './modules/mantenimiento/mantenimiento-descuento/mantenimiento-descuento.component';
import { MantenimientoProveedorComponent } from './modules/mantenimiento/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MantenimientoCategoriaComponent } from './modules/mantenimiento/mantenimiento-categoria/mantenimiento-categoria.component';
import { MantenimientoContenidoComponent } from './modules/mantenimiento/mantenimiento-contenido/mantenimiento-contenido.component';
import { MantenimientoProductoComponent } from './modules/mantenimiento/mantenimiento-producto/mantenimiento-producto.component';

import { TablaGeneralesComponent } from './modules/maestra/tabla-generales/tabla-generales.component';
import { RegComprasComponent } from './modules/reporte/reg-compras/reg-compras.component';
import { RegVentasComponent } from './modules/reporte/reg-ventas/reg-ventas.component';
import { RegReclamoComponent } from './modules/reporte/reg-reclamo/reg-reclamo.component';
import { RegProductoComponent } from './modules/reporte/reg-producto/reg-producto.component';
import { RegPromocionComponent } from './modules/reporte/reg-promocion/reg-promocion.component';
import { RegProgramacionCompraComponent } from './modules/programacion/reg-programacion-compra/reg-programacion-compra.component';
import { RegProgramacionVentaComponent } from './modules/programacion/reg-programacion-venta/reg-programacion-venta.component';
import { ConfigUsuarioComponent } from './modules/administracion/config-usuario/config-usuario.component';
import { ConfEmpresaComponent } from './modules/administracion/conf-empresa/conf-empresa.component';
import { ConfCompaniaComponent } from './modules/administracion/conf-compania/conf-compania.component';
import { ConfigPerfilComponent } from './modules/administracion/config-perfil/config-perfil.component';
import { ConfigPlantillaComponent } from './modules/administracion/config-plantilla/config-plantilla.component';
import { ConsultaCompraComponent } from './modules/consulta/consulta-compra/consulta-compra.component';
import { ConsultaDescuentoComponent } from './modules/consulta/consulta-descuento/consulta-descuento.component';
import { ConsultaProductoComponent } from './modules/consulta/consulta-producto/consulta-producto.component';
import { ConsultaPromocionComponent } from './modules/consulta/consulta-promocion/consulta-promocion.component';
import { ConsultaProveedorComponent } from './modules/consulta/consulta-proveedor/consulta-proveedor.component';
import { ConsultaVentaComponent } from './modules/consulta/consulta-venta/consulta-venta.component';
import { RegEstadoSituacionFinancieraComponent } from './modules/estado-situacion-financiera/reg-estado-situacion-financiera/reg-estado-situacion-financiera.component';
import { ModoCambiarRolComponent } from './components/modo-cambiar-rol/modo-cambiar-rol.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { TipoCambioComponent } from './modules/maestra/tipo-cambio/tipo-cambio.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
  { path: 'modo', component: ModoCambiarRolComponent, pathMatch: 'full', },
  {
    path: 'asientos',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'compras', component: AsientoCompraComponent, pathMatch: 'full' },
      { path: 'ventas', component: AsientoVentaComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'reporte',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'compras', component: RegComprasComponent, pathMatch: 'full' },
      { path: 'ventas', component: RegVentasComponent, pathMatch: 'full' },
      { path: 'reclamo', component: RegReclamoComponent, pathMatch: 'full' },
      { path: 'promocion', component: RegPromocionComponent, pathMatch: 'full' },
      { path: 'producto', component: RegProductoComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'maestras',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'tipocambios', component: TipoCambioComponent, pathMatch: 'full' },
    
    ]
  },  {
    path: 'programacion',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'regcompra', component: RegProgramacionCompraComponent, pathMatch: 'full' },
      { path: 'regventas', component: RegProgramacionVentaComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'administracion',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'usuario', component: ConfigUsuarioComponent, pathMatch: 'full' },
      { path: 'perfil', component: ConfigPerfilComponent, pathMatch: 'full' },
      { path: 'empresa', component: ConfEmpresaComponent, pathMatch: 'full' },
      { path: 'compania', component: ConfCompaniaComponent, pathMatch: 'full' },
      { path: 'plantilla', component: ConfigPlantillaComponent, pathMatch: 'full' },
    ]
  },

  {
    path: 'mantenimiento',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'tablagenerales', component: TablaGeneralesComponent, pathMatch: 'full' },
      { path: 'tablareseña', component: TablaResenaComponent, pathMatch: 'full' },
      { path: 'promocion', component: MantenimientoPromocionComponent, pathMatch: 'full' },
      { path: 'descuento', component: MantenimientoDescuentoComponent, pathMatch: 'full' },
      { path: 'categoria', component: MantenimientoCategoriaComponent, pathMatch: 'full' },
      { path: 'proveedor', component: MantenimientoProveedorComponent, pathMatch: 'full' },
      { path: 'contenido', component: MantenimientoContenidoComponent, pathMatch: 'full' },
      { path: 'producto', component: MantenimientoProductoComponent, pathMatch: 'full' },
    ]
  },



  {
    path: 'consulta',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'proveedor', component: ConsultaProveedorComponent, pathMatch: 'full' },
      { path: 'descuento', component: ConsultaDescuentoComponent, pathMatch: 'full' },
      { path: 'promocion', component: ConsultaPromocionComponent, pathMatch: 'full' },
      { path: 'producto', component: ConsultaProductoComponent, pathMatch: 'full' },
      { path: 'compra', component: ConsultaCompraComponent, pathMatch: 'full' },
      { path: 'venta', component: ConsultaVentaComponent, pathMatch: 'full' },

    ]
  },

  {
    path: 'estadosituacionfinanciera',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'situacionfinanciera', component: RegEstadoSituacionFinancieraComponent, pathMatch: 'full' },

    ]
  },
  {
    path: 'admin', component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: PrincipalComponent, },
    ]
  },
  {
    path: 'user-dashboard',
    component: HomeClienteComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  },
  {
    path: 'modo',
    component: HomeClienteComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
