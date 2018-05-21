import { TestBed, inject } from '@angular/core/testing';

import { DashboardmainService } from './dashboardmain.service';

describe('DashboardmainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardmainService]
    });
  });

  it('should be created', inject([DashboardmainService], (service: DashboardmainService) => {
    expect(service).toBeTruthy();
  }));
});
