import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionesPendientesComponent } from './invitaciones-pendientes.component';

describe('InvitacionesPendientesComponent', () => {
  let component: InvitacionesPendientesComponent;
  let fixture: ComponentFixture<InvitacionesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionesPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
