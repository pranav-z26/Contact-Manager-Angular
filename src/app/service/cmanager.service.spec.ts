import { TestBed } from '@angular/core/testing';

import { CmanagerService } from './cmanager.service';

describe('CmanagerService', () => {
  let service: CmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
