import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/cliente/home-cliente/home-cliente.component';
import { DashboardComponent } from './pages/admin/home-admin/home-admin.component';
import { LoginComponent } from './pages/configuracion/login/login.component';
import { SignupComponent } from './pages/configuracion/signup/signup.component';
import { HomeComponent } from './pages/configuracion/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './pages/admin/principal/principal.component';
import { AsientoCompraComponent } from './pages/admin/asiento/asiento-compra/asiento-compra.component';
import { AsientoVentaComponent } from './pages/admin/asiento/asiento-venta/asiento-venta.component';
import { AsientoComponent } from './pages/admin/asiento/asiento.component';
import { ReporteComponent } from './pages/admin/reporte/reporte.component';
import { RegComprasComponent } from './pages/admin/reporte/reg-compras/reg-compras.component';
import { RegVentasComponent } from './pages/admin/reporte/reg-ventas/reg-ventas.component';
import { RegReclamoComponent } from './pages/admin/reporte/reg-reclamo/reg-reclamo.component';
import { RegPromocionComponent } from './pages/admin/reporte/reg-promocion/reg-promocion.component';
import { RegProductoComponent } from './pages/admin/reporte/reg-producto/reg-producto.component';
import { ProgramacionComponent } from './pages/admin/programacion/programacion.component';
import { RegProgramacionCompraComponent } from './pages/admin/programacion/reg-programacion-compra/reg-programacion-compra.component';
import { RegProgramacionVentaComponent } from './pages/admin/programacion/reg-programacion-venta/reg-programacion-venta.component';
import { AdministracionComponent } from './pages/admin/administracion/administracion.component';
import { ConfigUsuarioComponent } from './pages/admin/administracion/config-usuario/config-usuario.component';
import { ConfigPerfilComponent } from './pages/admin/administracion/config-perfil/config-perfil.component';
import { MantenimientoComponent } from './pages/admin/mantenimiento/mantenimiento.component';
import { TablaGeneralesComponent } from './pages/admin/mantenimiento/tabla-generales/tabla-generales.component';
import { TablaResenaComponent } from './pages/admin/mantenimiento/tabla-resena/tabla-resena.component';
import { MantenimientoPromocionComponent } from './pages/admin/mantenimiento/mantenimiento-promocion/mantenimiento-promocion.component';
import { MantenimientoDescuentoComponent } from './pages/admin/mantenimiento/mantenimiento-descuento/mantenimiento-descuento.component';
import { MantenimientoProveedorComponent } from './pages/admin/mantenimiento/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MantenimientoCategoriaComponent } from './pages/admin/mantenimiento/mantenimiento-categoria/mantenimiento-categoria.component';
import { MantenimientoContenidoComponent } from './pages/admin/mantenimiento/mantenimiento-contenido/mantenimiento-contenido.component';
import { MantenimientoProductoComponent } from './pages/admin/mantenimiento/mantenimiento-producto/mantenimiento-producto.component';
import { ConsultaComponent } from './pages/admin/consulta/consulta.component';
import { ConsultaVentaComponent } from './pages/admin/consulta/consulta-venta/consulta-venta.component';
import { ConsultaCompraComponent } from './pages/admin/consulta/consulta-compra/consulta-compra.component';
import { ConsultaProductoComponent } from './pages/admin/consulta/consulta-producto/consulta-producto.component';
import { ConsultaPromocionComponent } from './pages/admin/consulta/consulta-promocion/consulta-promocion.component';
import { ConsultaProveedorComponent } from './pages/admin/consulta/consulta-proveedor/consulta-proveedor.component';
import { ConsultaDescuentoComponent } from './pages/admin/consulta/consulta-descuento/consulta-descuento.component';
import { RegEstadoSituacionFinancieraComponent } from './pages/admin/estado-situacion-financiera/reg-estado-situacion-financiera/reg-estado-situacion-financiera.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
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
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
