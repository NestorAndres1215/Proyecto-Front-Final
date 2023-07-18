import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarReclamoComponent } from './guardar-reclamo.component';

describe('GuardarReclamoComponent', () => {
  let component: GuardarReclamoComponent;
  let fixture: ComponentFixture<GuardarReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarReclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
