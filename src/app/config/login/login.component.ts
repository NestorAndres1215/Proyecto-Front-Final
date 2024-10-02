import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/services/mensaje.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private mensaje: MensajeService) { }

  ngOnInit(): void {

  }

  registrar() {

    this.router.navigate(['/signup']);

  }
  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.mensaje.MostrarMensaje('El nombre de usuario es requerido !!')
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.mensaje.MostrarMensaje('El contraseña de usuario es requerido !!')
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          if (this.loginService.getUserRole() == 'ADMIN') {

            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);
            this.mensaje.MostrarMensaje("Bienvenidos")
          }
          else if (this.loginService.getUserRole() == 'NORMAL') {

            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
            this.mensaje.MostrarMensaje("Bienvenidos")
          }
          else {
            this.loginService.logout();
          }
        })
      }, (error) => {
        this.mensaje.MostrarBodyError(error)

      }
    )
  }



}
