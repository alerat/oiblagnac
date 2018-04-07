import { TestBed, async, inject } from '@angular/core/testing';

import { SecuredGuard } from './secured.guard';

describe('SecuredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuredGuard]
    });
  });

  it('should ...', inject([SecuredGuard], (guard: SecuredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
