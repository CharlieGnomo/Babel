import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosGeneralComponent } from './libros-general.component';

describe('LibrosGeneralComponent', () => {
  let component: LibrosGeneralComponent;
  let fixture: ComponentFixture<LibrosGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
