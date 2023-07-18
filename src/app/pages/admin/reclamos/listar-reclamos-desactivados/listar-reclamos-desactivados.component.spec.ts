import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReclamosDesactivadosComponent } from './listar-reclamos-desactivados.component';

describe('ListarReclamosDesactivadosComponent', () => {
  let component: ListarReclamosDesactivadosComponent;
  let fixture: ComponentFixture<ListarReclamosDesactivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReclamosDesactivadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReclamosDesactivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
