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

  MostrarBodyError(message: string, duration: number = 2000) {
    console.log(message);
    
    let errorMessage: string;
    
    if (typeof message === 'string') {
        errorMessage = message;
    } else {
        const parsedMessage = JSON.parse(JSON.stringify(message));
        errorMessage = parsedMessage.error || 'Ocurrió un error desconocido';
    }
    console.log(errorMessage)
    this.snackBar.open(errorMessage, 'AVISO', {
        duration: duration,
    });
  }
}
