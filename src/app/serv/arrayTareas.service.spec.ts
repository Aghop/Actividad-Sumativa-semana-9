/* --------------------------------- IMPORTS -------------------------------- */

import { TestBed } from '@angular/core/testing';
import { ArrayTareasService } from './arrayTareas.service';

describe('TareasServService', () => {
  let service: ArrayTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
