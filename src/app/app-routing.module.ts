import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/cliente/home-cliente/home-cliente.component';
import { DashboardComponent } from './pages/admin/home-admin/home-admin.component';
import { LoginComponent } from './pages/configuracion/login/login.component';
import { SignupComponent } from './pages/configuracion/signup/signup.component';
import { HomeComponent } from './pages/configuracion/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/cliente/catalogo/catalogo.component';

import { PromocionesComponent } from './pages/cliente/promociones/promociones.component';
import { PrincipalComponent } from './pages/admin/principal/principal.component';
import { PerfilComponent } from './pages/admin/perfil/perfil.component';
import { VentasComponent } from './pages/admin/ventas/ventas.component';
import { ReclamosComponent } from './pages/admin/reclamos/reclamos.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { ProveedorComponent } from './pages/admin/proveedor/proveedor.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { UsuarioComponent } from './pages/admin/usuario/usuario.component';
import { ConfiguracionComponent } from './pages/admin/configuracion/configuracion.component';

import { AcercaDeEmpresaComponent } from './pages/cliente/footer-cliente/acerca-de-empresa/acerca-de-empresa.component';
import { AtencionClienteComponent } from './pages/cliente/footer-cliente/atencion-cliente/atencion-cliente.component';
import { ContactoComponent } from './pages/cliente/footer-cliente/contacto/contacto.component';
import { NosotrosComponent } from './pages/cliente/footer-cliente/nosotros/nosotros.component';
import { NuestrosProductosComponent } from './pages/cliente/footer-cliente/nuestros-productos/nuestros-productos.component';
import { PoliticaPrivacidadComponent } from './pages/cliente/footer-cliente/politica-privacidad/politica-privacidad.component';
import { SostenibilidadComponent } from './pages/cliente/footer-cliente/sostenibilidad/sostenibilidad.component';
import { ResponderReclamoComponent } from './pages/admin/reclamos/responder-reclamo/responder-reclamo.component';

import { CrearProductoComponent } from './pages/admin/productos/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './pages/admin/productos/actualizar-producto/actualizar-producto.component';
import { CrearCategoriaComponent } from './pages/admin/categoria/crear-categoria/crear-categoria.component';
import { ActualizarCategoriaComponent } from './pages/admin/categoria/actualizar-categoria/actualizar-categoria.component';
import { CrearProveedorComponent } from './pages/admin/proveedor/crear-proveedor/crear-proveedor.component';
import { ActualizarProveedorComponent } from './pages/admin/proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { RegistrarUsuarioAdminComponent } from './pages/admin/usuario/registrar-usuario-admin/registrar-usuario-admin.component';
import { PromocionComponent } from './pages/admin/promocion/promocion.component';
import { CompramosTuCamisetaComponent } from './pages/cliente/footer-cliente/compramos-tu-camiseta/compramos-tu-camiseta.component';
import { CompraComponent } from './pages/admin/compra/compra.component';
import { RegistrarCompraComponent } from './pages/admin/compra/registrar-compra/registrar-compra.component';
import { GraficosCompraComponent } from './pages/admin/compra/graficos-compra/graficos-compra.component';
import { DetalleCompraComponent } from './pages/admin/compra/detalle-compra/detalle-compra.component';
import { ArgentinaComponent } from './pages/cliente/selecciones/sudamerica/argentina/argentina.component';
import { BrasilComponent } from './pages/cliente/selecciones/sudamerica/brasil/brasil.component';
import { JaponComponent } from './pages/cliente/selecciones/asia/japon/japon.component';
import { CoreaDelSurComponent } from './pages/cliente/selecciones/asia/corea-del-sur/corea-del-sur.component';
import { AlemaniaComponent } from './pages/cliente/selecciones/europa/alemania/alemania.component';
import { PortugalComponent } from './pages/cliente/selecciones/europa/portugal/portugal.component';
import { BelgicaComponent } from './pages/cliente/selecciones/europa/belgica/belgica.component';
import { EspanaComponent } from './pages/cliente/selecciones/europa/espana/espana.component';
import { FranciaComponent } from './pages/cliente/selecciones/europa/francia/francia.component';
import { ItaliaComponent } from './pages/cliente/selecciones/europa/italia/italia.component';
import { PaisesBajosComponent } from './pages/cliente/selecciones/europa/paises-bajos/paises-bajos.component';
import { InglaterraComponent } from './pages/cliente/selecciones/europa/inglaterra/inglaterra.component';
import { PeruComponent } from './pages/cliente/selecciones/sudamerica/peru/peru.component';
import { MexicoComponent } from './pages/cliente/selecciones/norteamerica/mexico/mexico.component';
import { OtrosNorteamericaComponent } from './pages/cliente/selecciones/norteamerica/otros-norteamerica/otros-norteamerica.component';
import { TemporadaComponent } from './pages/cliente/temporada/temporada.component';
import { EstadosUnidosComponent } from './pages/cliente/selecciones/norteamerica/estados-unidos/estados-unidos.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',

  },
  {
    path: 'admin',
    component: DashboardComponent,

    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: PrincipalComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'reclamos',
        component: ReclamosComponent,
      },
      {
        path: 'reclamos/:reclamoId',
        component: ResponderReclamoComponent
      },
      {
        path: 'proveedor',
        component: ProveedorComponent,
      },
      {
        path: 'proveedor/crear-proveedor',
        component: CrearProveedorComponent,
      },
      {
        path: 'proveedor/:proveedorId',
        component: ActualizarProveedorComponent,
      },
      {
        path: 'producto',
        component: ProductosComponent,
      },
      {
        path: 'producto/crear-producto',
        component: CrearProductoComponent,
      },
      {
        path: 'producto/:id',
        component: ActualizarProductoComponent,
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
      {
        path: 'usuario/registrar-admin',
        component: RegistrarUsuarioAdminComponent,
      },
      {
        path: 'promocion',
        component: PromocionComponent,
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
      },
      {
        path: 'categoria/crear-categoria',
        component: CrearCategoriaComponent,
      },
      {
        path: 'categoria/:categoriaId',
        component: ActualizarCategoriaComponent,
      },
     
      {
        path: 'compras',
        component: CompraComponent,
      }, 
      {
        path: 'compras/registrar-compras',
        component: RegistrarCompraComponent,
      },
      {
        path: 'compras/graficos-compras',
        component: GraficosCompraComponent,
      },
      {
        path: 'compras/detalle-compra/:compraId',
        component: DetalleCompraComponent,
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent
      }


    ]


  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
    pathMatch: 'full',

  },

  {
    path: 'promociones',
    component: PromocionesComponent,
    pathMatch: 'full',
  },
  {
    path: 'acerca-de-empresa',
    component: AcercaDeEmpresaComponent,
    pathMatch: 'full',
  },
  {
    path: 'atencion-al-cliente',
    component: AtencionClienteComponent,
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    component: ContactoComponent,

  },
  {
    path: 'nosotros',
    component: NosotrosComponent,

  },
  {
    path: 'nuestros-productos',
    component: NuestrosProductosComponent,
    pathMatch: 'full',
  },
  {
    path: 'politica-privacidad',
    component: PoliticaPrivacidadComponent,
    pathMatch: 'full',
  },
  {
    path: 'temporada',
    component: TemporadaComponent,
 
  },
  {
    path:'seleccion/sudamerica/argentina',
    component:ArgentinaComponent,
  },
  {
    path:'seleccion/sudamerica/brasil',
    component:BrasilComponent,
  },
  {
    path:'seleccion/europa/alemania',
    component:AlemaniaComponent,
  },
  {
    path:'seleccion/europa/portugal',
    component:PortugalComponent,
  },
  {
    path:'seleccion/europa/belgica',
    component:BelgicaComponent,
  },
  {
    path:'seleccion/europa/españa',
    component:EspanaComponent,
  },
  {
    path:'seleccion/europa/francia',
    component:FranciaComponent,
  },
  {
    path:'seleccion/europa/italia',
    component:ItaliaComponent,
  },
    {
    path:'seleccion/europa/paises-bajos',
    component:PaisesBajosComponent,
  },
  {
    path:'seleccion/europa/inglaterra',
    component:InglaterraComponent,
  },
  {
    path:'seleccion/sudamerica/peru',
    component:PeruComponent,
  },
  {
    path:'seleccion/norteamerica/mexico',
    component:MexicoComponent,
  },
  {
    path:'seleccion/norteamerica/estados-unidos',
    component:EstadosUnidosComponent,
  },

  {
    path:'seleccion/norteamerica/otras-norteamerica',
    component:OtrosNorteamericaComponent,
  },

  {
    path:'seleccion/asia/japon',
    component:JaponComponent,
  },
  {
    path:'seleccion/asia/corea-del-sur',
    component:CoreaDelSurComponent,
  },
  {
    path: 'sostenibilidad',
    component: SostenibilidadComponent,
    pathMatch: 'full',
  },
  {
    path: 'compramos-tu-camiseta',
    component: CompramosTuCamisetaComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
