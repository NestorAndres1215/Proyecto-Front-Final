import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosEuropeosComponent } from './otros-europeos.component';

describe('OtrosEuropeosComponent', () => {
  let component: OtrosEuropeosComponent;
  let fixture: ComponentFixture<OtrosEuropeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosEuropeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosEuropeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
