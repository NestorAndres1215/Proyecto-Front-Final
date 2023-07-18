import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
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
//importacion del component
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { SignupComponent } from './pages/configuracion/signup/signup.component';
import { LoginComponent } from './pages/configuracion/login/login.component';
import { HomeComponent } from './pages/configuracion/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/home-admin/home-admin.component';
import { UserDashboardComponent } from './pages/cliente/home-cliente/home-cliente.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { FooterComponent } from './components/cliente/footer/footer.component';
import { CatalogoComponent } from './pages/cliente/catalogo/catalogo.component';
import { PromocionesComponent } from './pages/cliente/promociones/promociones.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { PrincipalComponent } from './pages/admin/principal/principal.component';
import { PerfilComponent } from './pages/admin/perfil/perfil.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { UsuarioComponent } from './pages/admin/usuario/usuario.component';
import { ProveedorComponent } from './pages/admin/proveedor/proveedor.component';
import { VentasComponent } from './pages/admin/ventas/ventas.component';
import { ReclamosComponent } from './pages/admin/reclamos/reclamos.component';
import { AcercaDeEmpresaComponent } from './pages/cliente/footer-cliente/acerca-de-empresa/acerca-de-empresa.component';
import { SostenibilidadComponent } from './pages/cliente/footer-cliente/sostenibilidad/sostenibilidad.component';
import { ContactoComponent } from './pages/cliente/footer-cliente/contacto/contacto.component';
import { NuestrosProductosComponent } from './pages/cliente/footer-cliente/nuestros-productos/nuestros-productos.component';
import { NosotrosComponent } from './pages/cliente/footer-cliente/nosotros/nosotros.component';
import { PoliticaPrivacidadComponent } from './pages/cliente/footer-cliente/politica-privacidad/politica-privacidad.component';
import { AtencionClienteComponent } from './pages/cliente/footer-cliente/atencion-cliente/atencion-cliente.component';
import { ConfiguracionComponent } from './pages/admin/configuracion/configuracion.component';


import { ListarUsuarioComponent } from './pages/admin/usuario/listar-usuario/listar-usuario.component';

import { GuardarReclamoComponent } from './pages/admin/reclamos/guardar-reclamo/guardar-reclamo.component';
import { ResponderReclamoComponent } from './pages/admin/reclamos/responder-reclamo/responder-reclamo.component';




import { CrearProductoComponent } from './pages/admin/productos/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './pages/admin/productos/actualizar-producto/actualizar-producto.component';
import { ListarActivadasComponent } from './pages/admin/categoria/listar-activadas/listar-activadas.component';
import { ListarDesactivadasComponent } from './pages/admin/categoria/listar-desactivadas/listar-desactivadas.component';
import { ActualizarCategoriaComponent } from './pages/admin/categoria/actualizar-categoria/actualizar-categoria.component';
import { CrearCategoriaComponent } from './pages/admin/categoria/crear-categoria/crear-categoria.component';
import { ListarActivadasProveedorComponent } from './pages/admin/proveedor/listar-activadas-proveedor/listar-activadas-proveedor.component';
import { ListarDesactivarProveedorComponent } from './pages/admin/proveedor/listar-desactivar-proveedor/listar-desactivar-proveedor.component';
import { CrearProveedorComponent } from './pages/admin/proveedor/crear-proveedor/crear-proveedor.component';
import { ActualizarProveedorComponent } from './pages/admin/proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { ListarReclamosActivadosComponent } from './pages/admin/reclamos/listar-reclamos-activados/listar-reclamos-activados.component';
import { ListarReclamosDesactivadosComponent } from './pages/admin/reclamos/listar-reclamos-desactivados/listar-reclamos-desactivados.component';
import { RegistrarUsuarioAdminComponent } from './pages/admin/usuario/registrar-usuario-admin/registrar-usuario-admin.component';
import { PromocionComponent } from './pages/admin/promocion/promocion.component';
import { CompramosTuCamisetaComponent } from './pages/cliente/footer-cliente/compramos-tu-camiseta/compramos-tu-camiseta.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpresaComponent } from './pages/admin/empresa/empresa.component';
import { GuardarEmpresaComponent } from './pages/admin/empresa/guardar-empresa/guardar-empresa.component';
import { ActualizarEmpresaComponent } from './pages/admin/empresa/actualizar-empresa/actualizar-empresa.component';
import { ListarEmpresaActivadasComponent } from './pages/admin/empresa/listar-empresa-activadas/listar-empresa-activadas.component';
import { CompraComponent } from './pages/admin/compra/compra.component';
import { ListarCompraComponent } from './pages/admin/compra/listar-compra/listar-compra.component';
import { RegistrarCompraComponent } from './pages/admin/compra/registrar-compra/registrar-compra.component';
import { ListarPromocionActivadasComponent } from './pages/admin/promocion/listar-promocion-activadas/listar-promocion-activadas.component';
import { ListarPromocionDesactivadasComponent } from './pages/admin/promocion/listar-promocion-desactivadas/listar-promocion-desactivadas.component';
import { CrearPromocionComponent } from './pages/admin/promocion/crear-promocion/crear-promocion.component';
import { ActualizarPromocionComponent } from './pages/admin/promocion/actualizar-promocion/actualizar-promocion.component';
import { DetalleCompraComponent } from './pages/admin/compra/detalle-compra/detalle-compra.component';
import { GraficosCompraComponent } from './pages/admin/compra/graficos-compra/graficos-compra.component';
import { ListarProductoActivadasComponent } from './pages/admin/productos/listar-producto-activadas/listar-producto-activadas.component';
import { ListarProductoDesactivadasComponent } from './pages/admin/productos/listar-producto-desactivadas/listar-producto-desactivadas.component';
import { ArgentinaComponent } from './pages/cliente/selecciones/sudamerica/argentina/argentina.component';
import { BrasilComponent } from './pages/cliente/selecciones/sudamerica/brasil/brasil.component';
import { CoreaDelSurComponent } from './pages/cliente/selecciones/asia/corea-del-sur/corea-del-sur.component';
import { JaponComponent } from './pages/cliente/selecciones/asia/japon/japon.component';
import { PortugalComponent } from './pages/cliente/selecciones/europa/portugal/portugal.component';
import { AlemaniaComponent } from './pages/cliente/selecciones/europa/alemania/alemania.component';
import { ItaliaComponent } from './pages/cliente/selecciones/europa/italia/italia.component';
import { FranciaComponent } from './pages/cliente/selecciones/europa/francia/francia.component';
import { PaisesBajosComponent } from './pages/cliente/selecciones/europa/paises-bajos/paises-bajos.component';
import { EspanaComponent } from './pages/cliente/selecciones/europa/espana/espana.component';
import { BelgicaComponent } from './pages/cliente/selecciones/europa/belgica/belgica.component';
import { InglaterraComponent } from './pages/cliente/selecciones/europa/inglaterra/inglaterra.component';
import { MexicoComponent } from './pages/cliente/selecciones/norteamerica/mexico/mexico.component';
import { TemporadaComponent } from './pages/cliente/temporada/temporada.component';
import { PeruComponent } from './pages/cliente/selecciones/sudamerica/peru/peru.component';
import { EstadosUnidosComponent } from './pages/cliente/selecciones/norteamerica/estados-unidos/estados-unidos.component';
import { OtrosNorteamericaComponent } from './pages/cliente/selecciones/norteamerica/otros-norteamerica/otros-norteamerica.component';
import { OtrosEuropeosComponent } from './pages/cliente/selecciones/europa/otros-europeos/otros-europeos.component';
import { OtrosAsiaticosComponent } from './pages/cliente/selecciones/asia/otros-asiaticos/otros-asiaticos.component';
import { OtrosAfricanosComponent } from './pages/cliente/selecciones/africa/otros-africanos/otros-africanos.component';
import { NigeriaComponent } from './pages/cliente/selecciones/africa/nigeria/nigeria.component';
import { MarruecosComponent } from './pages/cliente/selecciones/africa/marruecos/marruecos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    NavbarAdminComponent,
    FooterComponent,
    CatalogoComponent,
    PromocionesComponent,

    FooterAdminComponent,
    SidebarComponent,
    PrincipalComponent,
    PerfilComponent,
    ProductosComponent,
    CategoriaComponent,
    UsuarioComponent,
    ProveedorComponent,
    VentasComponent,
    ReclamosComponent,
    AcercaDeEmpresaComponent,
    SostenibilidadComponent,
    ContactoComponent,
    NuestrosProductosComponent,
    NosotrosComponent,
    PoliticaPrivacidadComponent,
    AtencionClienteComponent,
    ConfiguracionComponent,
    ListarUsuarioComponent,
    GuardarReclamoComponent,
    ResponderReclamoComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    ListarActivadasComponent,
    ListarDesactivadasComponent,
    ActualizarCategoriaComponent,
    CrearCategoriaComponent,
    ListarActivadasProveedorComponent,
    ListarDesactivarProveedorComponent,
    CrearProveedorComponent,
    ActualizarProveedorComponent,
    ListarReclamosActivadosComponent,
    ListarReclamosDesactivadosComponent,
    RegistrarUsuarioAdminComponent,
    PromocionComponent,
    CompramosTuCamisetaComponent,
    EmpresaComponent,
    GuardarEmpresaComponent,
    ActualizarEmpresaComponent,
    ListarEmpresaActivadasComponent,
    CompraComponent,
    ListarCompraComponent,
    RegistrarCompraComponent,
    ListarPromocionActivadasComponent,
    ListarPromocionDesactivadasComponent,
    CrearPromocionComponent,
    ActualizarPromocionComponent,
    DetalleCompraComponent,
    GraficosCompraComponent,
    ListarProductoActivadasComponent,
    ListarProductoDesactivadasComponent,
    ArgentinaComponent,
    BrasilComponent,
    CoreaDelSurComponent,
    JaponComponent,
    PortugalComponent,
    AlemaniaComponent,
    ItaliaComponent,
    FranciaComponent,
    PaisesBajosComponent,
    EspanaComponent,
    BelgicaComponent,
    InglaterraComponent,
    MexicoComponent,
    TemporadaComponent,
    PeruComponent,
    EstadosUnidosComponent,
    OtrosNorteamericaComponent,
    OtrosEuropeosComponent,
    OtrosAsiaticosComponent,
    OtrosAfricanosComponent,
    NigeriaComponent,
    MarruecosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatOptionModule,
    MatTabsModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatPaginatorModule

  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }