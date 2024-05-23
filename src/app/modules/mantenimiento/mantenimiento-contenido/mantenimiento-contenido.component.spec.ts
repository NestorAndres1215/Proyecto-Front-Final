import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoContenidoComponent } from './mantenimiento-contenido.component';

describe('MantenimientoContenidoComponent', () => {
  let component: MantenimientoContenidoComponent;
  let fixture: ComponentFixture<MantenimientoContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
