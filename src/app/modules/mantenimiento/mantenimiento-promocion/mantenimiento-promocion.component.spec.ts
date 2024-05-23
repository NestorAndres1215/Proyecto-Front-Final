import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPromocionComponent } from './mantenimiento-promocion.component';

describe('MantenimientoPromocionComponent', () => {
  let component: MantenimientoPromocionComponent;
  let fixture: ComponentFixture<MantenimientoPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoPromocionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
