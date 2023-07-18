import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  ngOnInit(): void {
 
  }
  
  activeTab: number = 0; // Cambia el tipo a 'number'

}
