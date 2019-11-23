import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioautoinputComponent } from './dettaglioautoinput.component';

describe('DettaglioautoComponent', () => {
  let component: DettaglioautoinputComponent;
  let fixture: ComponentFixture<DettaglioautoinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioautoinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioautoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
