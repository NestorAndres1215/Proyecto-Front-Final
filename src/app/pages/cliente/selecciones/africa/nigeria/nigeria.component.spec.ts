import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NigeriaComponent } from './nigeria.component';

describe('NigeriaComponent', () => {
  let component: NigeriaComponent;
  let fixture: ComponentFixture<NigeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NigeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
