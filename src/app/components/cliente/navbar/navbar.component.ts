import { NombreService } from 'src/app/services/nombre.service';
import { LoginService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedIn = false;
  user:any = null;
  nombreE:any=null;
  constructor(public login:LoginService,
    private nombreService:NombreService ) { }

  ngOnInit(): void {

    //traer el nombre de la empresa
      this.nombreE=this.nombreService.getNombre();
    //login 
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
  }

  public logout() {
    this.login.logout();
    window.location.href = '';
  }

}
