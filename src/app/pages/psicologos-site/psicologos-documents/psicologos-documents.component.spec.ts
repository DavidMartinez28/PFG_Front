import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosDocumentsComponent } from './psicologos-documents.component';

describe('PsicologosDocumentsComponent', () => {
  let component: PsicologosDocumentsComponent;
  let fixture: ComponentFixture<PsicologosDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologosDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologosDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
