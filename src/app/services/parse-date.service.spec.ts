import { TestBed, inject } from '@angular/core/testing';

import { ParseDateService } from './parse-date.service';

describe('ParseDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseDateService]
    });
  });

  it('should be created', inject([ParseDateService], (service: ParseDateService) => {
    expect(service).toBeTruthy();
  }));
});
