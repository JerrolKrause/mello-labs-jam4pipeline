import { TestBed, inject } from '@angular/core/testing';

import { Jam4pipelineService } from './jam4pipeline.service';

describe('Jam4pipelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Jam4pipelineService],
    });
  });

  it(
    'should be created',
    inject([Jam4pipelineService], (service: Jam4pipelineService) => {
      expect(service).toBeTruthy();
    }),
  );
});
