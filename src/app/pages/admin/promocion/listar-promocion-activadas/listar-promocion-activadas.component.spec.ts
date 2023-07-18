import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPromocionActivadasComponent } from './listar-promocion-activadas.component';

describe('ListarPromocionActivadasComponent', () => {
  let component: ListarPromocionActivadasComponent;
  let fixture: ComponentFixture<ListarPromocionActivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPromocionActivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPromocionActivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
