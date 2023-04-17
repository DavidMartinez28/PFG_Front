import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesDocumentsComponent } from './pacientes-documents.component';

describe('PacientesDocumentsComponent', () => {
  let component: PacientesDocumentsComponent;
  let fixture: ComponentFixture<PacientesDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
