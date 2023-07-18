import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosUnidosComponent } from './estados-unidos.component';

describe('EstadosUnidosComponent', () => {
  let component: EstadosUnidosComponent;
  let fixture: ComponentFixture<EstadosUnidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosUnidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosUnidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
