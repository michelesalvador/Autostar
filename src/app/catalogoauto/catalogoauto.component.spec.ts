import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoautoComponent } from './catalogoauto.component';

describe('CatalogoautoComponent', () => {
  let component: CatalogoautoComponent;
  let fixture: ComponentFixture<CatalogoautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
