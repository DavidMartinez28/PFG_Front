import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosSesionesComponent } from './psicologos-sesiones.component';

describe('PsicologosSesionesComponent', () => {
  let component: PsicologosSesionesComponent;
  let fixture: ComponentFixture<PsicologosSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologosSesionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologosSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
