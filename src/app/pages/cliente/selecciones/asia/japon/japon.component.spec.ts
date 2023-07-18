import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaponComponent } from './japon.component';

describe('JaponComponent', () => {
  let component: JaponComponent;
  let fixture: ComponentFixture<JaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
