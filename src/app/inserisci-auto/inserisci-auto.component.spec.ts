import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciAutoComponent } from './inserisci-auto.component';

describe('InserisciAutoComponent', () => {
  let component: InserisciAutoComponent;
  let fixture: ComponentFixture<InserisciAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
