import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosGserviceComponent } from './libros-gservice.component';

describe('LibrosGserviceComponent', () => {
  let component: LibrosGserviceComponent;
  let fixture: ComponentFixture<LibrosGserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosGserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
