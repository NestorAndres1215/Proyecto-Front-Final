import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoActivadasComponent } from './listar-producto-activadas.component';

describe('ListarProductoActivadasComponent', () => {
  let component: ListarProductoActivadasComponent;
  let fixture: ComponentFixture<ListarProductoActivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductoActivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProductoActivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
