import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlemaniaComponent } from './alemania.component';

describe('AlemaniaComponent', () => {
  let component: AlemaniaComponent;
  let fixture: ComponentFixture<AlemaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlemaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlemaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
