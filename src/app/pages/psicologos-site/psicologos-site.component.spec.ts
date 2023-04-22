import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosSiteComponent } from './psicologos-site.component';

describe('PsicologosSiteComponent', () => {
  let component: PsicologosSiteComponent;
  let fixture: ComponentFixture<PsicologosSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologosSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologosSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
