import { TestBed } from '@angular/core/testing';

import { EspecialidadVetService } from './especialidad-vet.service';

describe('es', () => {
  let service: EspecialidadVetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadVetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
