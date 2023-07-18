import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenibilidadComponent } from './sostenibilidad.component';

describe('SostenibilidadComponent', () => {
  let component: SostenibilidadComponent;
  let fixture: ComponentFixture<SostenibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SostenibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SostenibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
