import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosNorteamericaComponent } from './otros-norteamerica.component';

describe('OtrosNorteamericaComponent', () => {
  let component: OtrosNorteamericaComponent;
  let fixture: ComponentFixture<OtrosNorteamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosNorteamericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosNorteamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
