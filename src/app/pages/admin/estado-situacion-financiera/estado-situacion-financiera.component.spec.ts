import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoSituacionFinancieraComponent } from './estado-situacion-financiera.component';

describe('EstadoSituacionFinancieraComponent', () => {
  let component: EstadoSituacionFinancieraComponent;
  let fixture: ComponentFixture<EstadoSituacionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoSituacionFinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoSituacionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
