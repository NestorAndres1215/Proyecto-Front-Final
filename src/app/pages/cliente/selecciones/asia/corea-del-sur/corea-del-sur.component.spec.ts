import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreaDelSurComponent } from './corea-del-sur.component';

describe('CoreaDelSurComponent', () => {
  let component: CoreaDelSurComponent;
  let fixture: ComponentFixture<CoreaDelSurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreaDelSurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreaDelSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
