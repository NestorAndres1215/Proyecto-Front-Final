import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosCompraComponent } from './graficos-compra.component';

describe('GraficosCompraComponent', () => {
  let component: GraficosCompraComponent;
  let fixture: ComponentFixture<GraficosCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
