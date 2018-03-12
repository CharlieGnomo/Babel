import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicsComponent } from './comunics.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

describe('ComunicsComponent', () => {
  let component: ComunicsComponent;
  let fixture: ComponentFixture<ComunicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicsComponent,
      PadreComponent, HijoComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
