import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosAfricanosComponent } from './otros-africanos.component';

describe('OtrosAfricanosComponent', () => {
  let component: OtrosAfricanosComponent;
  let fixture: ComponentFixture<OtrosAfricanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosAfricanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosAfricanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
