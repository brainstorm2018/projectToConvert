import { TestBed, inject } from '@angular/core/testing';

import { StateSessionService } from './state-session.service';

describe('StateSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateSessionService]
    });
  });

  it('should be created', inject([StateSessionService], (service: StateSessionService) => {
    expect(service).toBeTruthy();
  }));
});
