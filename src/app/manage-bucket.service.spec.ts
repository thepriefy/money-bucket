import { TestBed, inject } from '@angular/core/testing';

import { ManageBucketService } from './manage-bucket.service';

describe('ManageBucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageBucketService]
    });
  });

  it('should be created', inject([ManageBucketService], (service: ManageBucketService) => {
    expect(service).toBeTruthy();
  }));
});
