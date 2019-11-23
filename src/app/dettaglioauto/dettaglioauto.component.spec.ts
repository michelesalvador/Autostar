import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioautoComponent } from './dettaglioauto.component';

describe('DettaglioautoComponent', () => {
  let component: DettaglioautoComponent;
  let fixture: ComponentFixture<DettaglioautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
