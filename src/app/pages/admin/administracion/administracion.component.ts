import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {


  isLoggedIn = false;
  user: any = null;
  contenido: any;
  isRouteActive: boolean = true;

  constructor(public login: LoginService, private router: Router, private menu: MenuService) { }

  ngOnInit(): void {
    this.listarMenuPrimero();
    this.listarMenuSegundo('');
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
    console.log(this.menu1)
    ///


  }
  menu1: any

  async listarMenuPrimero() {
    this.menu.listarmenuPrimero().subscribe(
      data => {
        console.log(data);
        this.menu1 = data
      }
    );
  }
  menu2FiltradoPorCategoria: { [categoria: string]: any[] } = {};
  toggleSubMenu(menuItem: any): void {
    console.log(menuItem);
    // Cambiar el estado de mostrarSubMenu para mostrar u ocultar el submenú
    menuItem.mostrarSubMenu = !menuItem.mostrarSubMenu;

    if (menuItem.mostrarSubMenu) {
      console.log(menuItem.mostrarSubMenu)
      // Filtrar los elementos del submenú por la categoría del elemento del menú principal
      this.menu2FiltradoPorCategoria[menuItem.menuCategoria] = this.menu2.filter((i: { menuCategoria: any; }) => i.menuCategoria === menuItem.menuCategoria);
      console.log(this.menu2FiltradoPorCategoria[menuItem.menuCategoria]);
      if (this.menu2FiltradoPorCategoria[menuItem.menuCategoria].length === 0) {
        console.log('El arreglo está vacío');
        this.router.navigate(['/admin']);
      }
    } else {
      // Si se oculta el submenú, limpiar el arreglo de elementos filtrados
      this.menu2FiltradoPorCategoria[menuItem.menuCategoria] = [];
    }
  }




  handleSubmenuItemClicked(subMenuItem: any): void {
    console.log('Clic en el submenu:', subMenuItem.menuNombre);
  }
  menu2: any
  async listarMenuSegundo(categoria: any) {
    this.menu.listarmenuSegundo(categoria).subscribe(
      data => {
        console.log(data);

        this.menu2 = data



      }
    );
  }

  public logout() {
    this.login.logout();
    window.location.href = '';
  }

  status = false;
  addToggle() {
    this.status = !this.status;
  }
  @ViewChild(MatMenuTrigger) mainMenuTrigger!: MatMenuTrigger;



  closeMainMenu() {
    // Agrega lógica para cerrar el menú principal si es necesario
    this.mainMenuTrigger.closeMenu();
  }

}
