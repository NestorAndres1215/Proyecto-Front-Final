import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ModalPerfilComponent } from '../../modal/modal-perfil/modal-perfil.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { LoginService } from 'src/app/services/login.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-cabecera-administrador',
  templateUrl: './cabecera-administrador.component.html',
  styleUrls: ['./cabecera-administrador.component.css']
})
export class CabeceraAdministradorComponent implements OnInit {


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

        this.menuxd = data
        this.menu1 = this.menuxd.filter((item: { menuTipo: string; }) => item.menuTipo === 'T');

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
        this.router.navigate(['/admin']);
      }
    } else {

      this.menu2FiltradoPorCategoria[menuItem.menuCategoria] = [];
    }
  }




  handleSubmenuItemClicked(subMenuItem: any): void {
    //console.log('Clic en el submenu:', subMenuItem.menuNombre);
  }
  menu2: any
  async listarMenuSegundo(categoria: any) {
    this.menu.listarmenuSegundo(categoria).subscribe(
      data => {

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

 
  perfil() {

    const dialogRef = this.dialog.open(ModalPerfilComponent, {
      width: '500px',
      height: '500px',
      data: {

      }
    });
  }
  modo() {
    this.router.navigate(['/modo']);
  }
}
