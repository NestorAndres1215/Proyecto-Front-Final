import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReclamosActivadosComponent } from './listar-reclamos-activados.component';

describe('ListarReclamosActivadosComponent', () => {
  let component: ListarReclamosActivadosComponent;
  let fixture: ComponentFixture<ListarReclamosActivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReclamosActivadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReclamosActivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
