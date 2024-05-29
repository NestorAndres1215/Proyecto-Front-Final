import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modo-cambiar-rol',
  templateUrl: './modo-cambiar-rol.component.html',
  styleUrls: ['./modo-cambiar-rol.component.css']
})
export class ModoCambiarRolComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  operar() {
    this.router.navigate(['/user-dashboard']);
  }
}
