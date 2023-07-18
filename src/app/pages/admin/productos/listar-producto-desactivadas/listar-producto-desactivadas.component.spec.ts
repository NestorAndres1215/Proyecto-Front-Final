import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoDesactivadasComponent } from './listar-producto-desactivadas.component';

describe('ListarProductoDesactivadasComponent', () => {
  let component: ListarProductoDesactivadasComponent;
  let fixture: ComponentFixture<ListarProductoDesactivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductoDesactivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProductoDesactivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
