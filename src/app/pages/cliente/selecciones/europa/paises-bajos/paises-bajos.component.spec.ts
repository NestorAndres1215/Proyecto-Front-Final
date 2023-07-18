import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesBajosComponent } from './paises-bajos.component';

describe('PaisesBajosComponent', () => {
  let component: PaisesBajosComponent;
  let fixture: ComponentFixture<PaisesBajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesBajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesBajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
