import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActiveSessionGuard } from './active-session.guard';

describe('ActiveSessionGuard', () => {
  let guard: ActiveSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(ActiveSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
