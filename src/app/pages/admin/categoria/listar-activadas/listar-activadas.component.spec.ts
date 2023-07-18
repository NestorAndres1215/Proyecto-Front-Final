import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActivadasComponent } from './listar-activadas.component';

describe('ListarActivadasComponent', () => {
  let component: ListarActivadasComponent;
  let fixture: ComponentFixture<ListarActivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarActivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
