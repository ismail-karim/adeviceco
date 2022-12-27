import { TestBed } from '@angular/core/testing';

import { StoreDatasService } from './store-datas.service';

describe('StoreDatasService', () => {
  let service: StoreDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
