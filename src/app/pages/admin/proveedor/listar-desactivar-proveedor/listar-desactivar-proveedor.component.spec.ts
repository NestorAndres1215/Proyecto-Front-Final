import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDesactivarProveedorComponent } from './listar-desactivar-proveedor.component';

describe('ListarDesactivarProveedorComponent', () => {
  let component: ListarDesactivarProveedorComponent;
  let fixture: ComponentFixture<ListarDesactivarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDesactivarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDesactivarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
