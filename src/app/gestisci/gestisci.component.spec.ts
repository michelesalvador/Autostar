import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestisciComponent } from './gestisci.component';

describe('GestisciComponent', () => {
  let component: GestisciComponent;
  let fixture: ComponentFixture<GestisciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestisciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
