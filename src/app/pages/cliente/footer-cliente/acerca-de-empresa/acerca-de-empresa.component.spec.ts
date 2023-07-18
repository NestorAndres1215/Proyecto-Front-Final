import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeEmpresaComponent } from './acerca-de-empresa.component';

describe('AcercaDeEmpresaComponent', () => {
  let component: AcercaDeEmpresaComponent;
  let fixture: ComponentFixture<AcercaDeEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
