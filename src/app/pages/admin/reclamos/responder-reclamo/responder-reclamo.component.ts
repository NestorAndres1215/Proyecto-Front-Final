import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-responder-reclamo',
  templateUrl: './responder-reclamo.component.html',
  styleUrls: ['./responder-reclamo.component.css']
})
export class ResponderReclamoComponent implements OnInit{
  reclamoId!: number;
  reclamo: any;
  mensaje: string='';

  constructor(
    private route: ActivatedRoute,
    private reclamoService: ReclamoService
  ) { }

  ngOnInit(): void {
    this.reclamoId = this.route.snapshot.params['reclamoId'];
    console.log("llego id"+this.reclamoId);
    console.log(this.route.snapshot.params);
    this.obtenerReclamoPorId(this.reclamoId);
    
  }

  obtenerReclamoPorId(reclamoId: number): void {
    this.reclamoService.obtenerReclamoPorId(reclamoId).subscribe(
      (data) => {
        this.reclamo = data;
        console.log(this.reclamo);
      },
      (error) => {
        console.log(error);
      }
    );
  }



  enviarDisculpas(): void {

    this.reclamoService.enviarDisculpas(this.reclamoId, this.mensaje).subscribe(
      (response) => {
        console.log(response); // Manejar la respuesta exitosa
      },
      (error) => {
        console.error(error); // Manejar el error
      }
    );
  }
}
 


