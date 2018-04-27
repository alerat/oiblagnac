import {inject, TestBed} from '@angular/core/testing';

import {SecuredGuard} from './secured.guard';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

describe('SecuredGuard', () => {

  beforeEach(() => {
    const router = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [SecuredGuard, AuthService, {provide: Router, useValue: router}]
    })
    ;
  });

  it('should ...', inject([SecuredGuard], (guard: SecuredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
