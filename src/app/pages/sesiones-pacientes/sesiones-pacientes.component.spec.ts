import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesPacientesComponent } from './sesiones-pacientes.component';

describe('SesionesPacientesComponent', () => {
  let component: SesionesPacientesComponent;
  let fixture: ComponentFixture<SesionesPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
