import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompramosTuCamisetaComponent } from './compramos-tu-camiseta.component';

describe('CompramosTuCamisetaComponent', () => {
  let component: CompramosTuCamisetaComponent;
  let fixture: ComponentFixture<CompramosTuCamisetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompramosTuCamisetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompramosTuCamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
