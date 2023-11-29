import { TestBed } from '@angular/core/testing';

import { TipomascotaService } from './tipomascota.service';

describe('TipomascotaService', () => {
  let service: TipomascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipomascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
