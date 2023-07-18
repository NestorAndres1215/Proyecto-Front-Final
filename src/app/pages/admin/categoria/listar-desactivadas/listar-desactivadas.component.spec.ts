import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDesactivadasComponent } from './listar-desactivadas.component';

describe('ListarDesactivadasComponent', () => {
  let component: ListarDesactivadasComponent;
  let fixture: ComponentFixture<ListarDesactivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDesactivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDesactivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
