import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionesPacientesComponent } from './invitaciones-pacientes.component';

describe('InvitacionesPacientesComponent', () => {
  let component: InvitacionesPacientesComponent;
  let fixture: ComponentFixture<InvitacionesPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionesPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionesPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
