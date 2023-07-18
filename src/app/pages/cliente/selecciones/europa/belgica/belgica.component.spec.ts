import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgicaComponent } from './belgica.component';

describe('BelgicaComponent', () => {
  let component: BelgicaComponent;
  let fixture: ComponentFixture<BelgicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelgicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelgicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
