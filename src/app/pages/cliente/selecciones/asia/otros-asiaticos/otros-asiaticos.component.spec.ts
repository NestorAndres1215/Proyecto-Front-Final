import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosAsiaticosComponent } from './otros-asiaticos.component';

describe('OtrosAsiaticosComponent', () => {
  let component: OtrosAsiaticosComponent;
  let fixture: ComponentFixture<OtrosAsiaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosAsiaticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosAsiaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
