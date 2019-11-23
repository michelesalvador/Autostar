import { TestBed } from '@angular/core/testing';

import { UtilitaService } from './utilita.service';

describe('UtilitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilitaService = TestBed.get(UtilitaService);
    expect(service).toBeTruthy();
  });
});
