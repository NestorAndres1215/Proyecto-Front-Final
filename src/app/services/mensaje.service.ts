import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensajeCambio = new Subject<string>();

  constructor(private snackBar: MatSnackBar,
  ) { }

  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }
  MostrarMensaje(message: string, duration: number = 2000) {
    this.snackBar.open(message, 'AVISO', {
      duration: duration,
    });
  }
  MostrarError(message: Object, duration: number = 2000) {
    console.log(message)
    let errorMessage = typeof message === 'string' ? message : JSON.stringify(message);
    errorMessage = errorMessage.replace(/.*?{\s*"error"\s*:\s*"([^"]*)"\s*}.*/, '$1');
    this.snackBar.open(errorMessage, 'AVISO', {
      duration: duration,
    });
  }

  MostrarBodyError(message: any, duration: number = 2000) {
    console.log(message);
    console.log(typeof message)
    let errorMessage: string;

    if (typeof message === 'string') {
      errorMessage = message;
    }

    else if (typeof message === 'object' && message !== null) {

      if (message.error && typeof message.error === 'object' && message.error.mensaje) {
        errorMessage = message.error.mensaje;
      } else if (message.error) {
        console.log(message.error)
        errorMessage = JSON.stringify(message.error);
      } else if (message.message) {
        errorMessage = message.message;
      } else {
        errorMessage = JSON.stringify(message);
      }
    }

    else {
      errorMessage = 'Ocurrió un error desconocido';
    }
    console.log(errorMessage)
    errorMessage = JSON.stringify(message.error).replace(/\"/g, '');

    this.snackBar.open(errorMessage, 'AVISO', {
      duration: duration,
    });
  }

}