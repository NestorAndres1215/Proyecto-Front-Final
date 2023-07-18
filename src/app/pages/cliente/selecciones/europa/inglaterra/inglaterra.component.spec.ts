import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglaterraComponent } from './inglaterra.component';

describe('InglaterraComponent', () => {
  let component: InglaterraComponent;
  let fixture: ComponentFixture<InglaterraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglaterraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InglaterraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
