import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPromocionDesactivadasComponent } from './listar-promocion-desactivadas.component';

describe('ListarPromocionDesactivadasComponent', () => {
  let component: ListarPromocionDesactivadasComponent;
  let fixture: ComponentFixture<ListarPromocionDesactivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPromocionDesactivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPromocionDesactivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
