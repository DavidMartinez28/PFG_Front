import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesSesionesComponent } from './pacientes-sesiones.component';

describe('PacientesSesionesComponent', () => {
  let component: PacientesSesionesComponent;
  let fixture: ComponentFixture<PacientesSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesSesionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
