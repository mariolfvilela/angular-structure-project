import { TestBed } from '@angular/core/testing';

import { Srv2Service } from './srv2.service';

describe('Srv2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Srv2Service = TestBed.get(Srv2Service);
    expect(service).toBeTruthy();
  });
});
