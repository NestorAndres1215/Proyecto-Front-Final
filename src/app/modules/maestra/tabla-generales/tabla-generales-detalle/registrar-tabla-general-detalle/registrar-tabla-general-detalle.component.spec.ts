import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTablaGeneralDetalleComponent } from './registrar-tabla-general-detalle.component';

describe('RegistrarTablaGeneralDetalleComponent', () => {
  let component: RegistrarTablaGeneralDetalleComponent;
  let fixture: ComponentFixture<RegistrarTablaGeneralDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTablaGeneralDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTablaGeneralDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
