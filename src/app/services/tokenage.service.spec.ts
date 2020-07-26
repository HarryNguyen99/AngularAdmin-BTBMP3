import { TestBed } from '@angular/core/testing';

import { TokenageService } from './tokenage.service';

describe('TokenageService', () => {
  let service: TokenageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
