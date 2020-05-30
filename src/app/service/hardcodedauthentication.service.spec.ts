import { TestBed } from '@angular/core/testing';

import { HardcodedauthenticationService } from './hardcodedauthentication.service';

describe('HardcodedauthenticationService', () => {
  let service: HardcodedauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
