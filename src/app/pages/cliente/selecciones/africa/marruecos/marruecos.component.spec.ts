import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarruecosComponent } from './marruecos.component';

describe('MarruecosComponent', () => {
  let component: MarruecosComponent;
  let fixture: ComponentFixture<MarruecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarruecosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarruecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
