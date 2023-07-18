import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosProductosComponent } from './nuestros-productos.component';

describe('NuestrosProductosComponent', () => {
  let component: NuestrosProductosComponent;
  let fixture: ComponentFixture<NuestrosProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
