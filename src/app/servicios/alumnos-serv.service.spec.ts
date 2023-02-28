import { TestBed } from '@angular/core/testing';

import { AlumnosServService } from './alumnos-serv.service';

describe('AlumnosServService', () => {
  let service: AlumnosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
