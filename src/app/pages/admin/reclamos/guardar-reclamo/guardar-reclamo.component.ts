import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-guardar-reclamo',
  templateUrl: './guardar-reclamo.component.html',
  styleUrls: ['./guardar-reclamo.component.css']
})
export class GuardarReclamoComponent implements OnInit {
  reclamo={
    nombre:'',
    email:'',
    asunto:'',
  }
  constructor(private reclamoService:ReclamoService,private snack:MatSnackBar,private router:Router) { }


  ngOnInit(): void {
  }
  formSubmit(){
    if(this.reclamo.nombre.trim() == '' || this.reclamo.nombre == null){
      this.snack.open("El reclamo es requerido !!",'',{
        duration:3000
      })
      return ;
    }

    this.reclamoService.agregarReclamo(this.reclamo).subscribe(
      (dato:any) => {
        this.reclamo.nombre = '';
        this.reclamo.email='';
        this.reclamo.asunto = '';
        Swal.fire('Solicitud de Reclamo enviado','Se ha enviado su Solicitud de Reclamo con exito','success');
        this.router.navigate(['/user-dashboard']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al enviar su solicitud de reclamo','error')
      }
    )
  }
}
