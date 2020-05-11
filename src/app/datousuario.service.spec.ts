import { TestBed } from '@angular/core/testing';

import { DatousuarioService } from './datousuario.service';

describe('DatousuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatousuarioService = TestBed.get(DatousuarioService);
    expect(service).toBeTruthy();
  });
});
