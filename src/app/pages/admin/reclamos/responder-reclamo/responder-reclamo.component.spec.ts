import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderReclamoComponent } from './responder-reclamo.component';

describe('ResponderReclamoComponent', () => {
  let component: ResponderReclamoComponent;
  let fixture: ComponentFixture<ResponderReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponderReclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponderReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
