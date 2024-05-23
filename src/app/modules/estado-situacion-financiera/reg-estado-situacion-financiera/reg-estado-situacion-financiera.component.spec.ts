import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEstadoSituacionFinancieraComponent } from './reg-estado-situacion-financiera.component';

describe('RegEstadoSituacionFinancieraComponent', () => {
  let component: RegEstadoSituacionFinancieraComponent;
  let fixture: ComponentFixture<RegEstadoSituacionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEstadoSituacionFinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegEstadoSituacionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
