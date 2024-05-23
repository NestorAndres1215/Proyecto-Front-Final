import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavigationEnd, Route, Router } from '@angular/router';
import { ModalPerfilComponent } from 'src/app/components/modal/modal-perfil/modal-perfil.component';
import { LoginService } from 'src/app/services/login.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  user: any = null;
  contenido: any;
  isRouteActive: boolean = true;

  constructor(
    public login: LoginService,

    private dialog: MatDialog,
    private mensajeService: MensajeService,
    private change: ChangeDetectorRef,
    private router: Router, 
    private menu: MenuService) { }

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



  }
  menu1: any
  menuxd: any
  async listarMenuPrimero() {
    this.menu.listarmenuPrimero().subscribe(
      data => {
        console.log(data);
        this.menuxd = data
        this.menu1 = this.menuxd.filter((item: { menuTipo: string; }) => item.menuTipo === 'T');
        console.log(this.menu1)
      }
    );
  }
  menu2FiltradoPorCategoria: { [categoria: string]: any[] } = {};
  toggleSubMenu(menuItem: any): void {
    menuItem.mostrarSubMenu = !menuItem.mostrarSubMenu;

    if (menuItem.mostrarSubMenu) {
      console.log(menuItem.mostrarSubMenu)
      this.menu2FiltradoPorCategoria[menuItem.menuCategoria] = this.menu2.filter((i: { menuCategoria: any; }) => i.menuCategoria === menuItem.menuCategoria);

      if (this.menu2FiltradoPorCategoria[menuItem.menuCategoria].length === 0) {
        console.log('El arreglo está vacío');
        this.router.navigate(['/admin']);
      }
    } else {

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
    this.mainMenuTrigger.closeMenu();
  }

  configuracion(){


    
  }
  perfil(){

    const dialogRef = this.dialog.open(ModalPerfilComponent, {
      width: '700px',
      height: '430px',
      data: {
    
      }
    });
  }
}
