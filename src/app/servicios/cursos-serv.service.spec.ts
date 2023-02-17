import { TestBed } from '@angular/core/testing';

import { CursosServService } from './cursos-serv.service';

describe('CursosServService', () => {
  let service: CursosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
