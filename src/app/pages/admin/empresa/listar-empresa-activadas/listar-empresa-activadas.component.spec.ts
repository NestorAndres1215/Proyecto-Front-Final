import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpresaActivadasComponent } from './listar-empresa-activadas.component';

describe('ListarEmpresaActivadasComponent', () => {
  let component: ListarEmpresaActivadasComponent;
  let fixture: ComponentFixture<ListarEmpresaActivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmpresaActivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmpresaActivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
