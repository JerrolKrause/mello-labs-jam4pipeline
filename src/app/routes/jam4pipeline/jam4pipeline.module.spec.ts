import { Jam4pipelineModule } from './jam4pipeline.module';

describe('Jam4pipelineModule', () => {
  let jam4pipelineModule: Jam4pipelineModule;

  beforeEach(() => {
    jam4pipelineModule = new Jam4pipelineModule();
  });

  it('should create an instance', () => {
    expect(jam4pipelineModule).toBeTruthy();
  });
});
