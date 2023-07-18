import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActivadasProveedorComponent } from './listar-activadas-proveedor.component';

describe('ListarActivadasProveedorComponent', () => {
  let component: ListarActivadasProveedorComponent;
  let fixture: ComponentFixture<ListarActivadasProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActivadasProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarActivadasProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
