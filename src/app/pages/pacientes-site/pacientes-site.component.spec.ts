import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesSiteComponent } from './pacientes-site.component';

describe('PacientesSiteComponent', () => {
  let component: PacientesSiteComponent;
  let fixture: ComponentFixture<PacientesSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
