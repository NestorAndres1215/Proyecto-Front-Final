import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTablaGeneralComponent } from './registrar-tabla-general.component';

describe('RegistrarTablaGeneralComponent', () => {
  let component: RegistrarTablaGeneralComponent;
  let fixture: ComponentFixture<RegistrarTablaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTablaGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTablaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
