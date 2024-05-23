import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDescuentoComponent } from './mantenimiento-descuento.component';

describe('MantenimientoDescuentoComponent', () => {
  let component: MantenimientoDescuentoComponent;
  let fixture: ComponentFixture<MantenimientoDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoDescuentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
