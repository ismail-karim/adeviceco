import { TestBed } from '@angular/core/testing';

import { UpdateDatasService } from './update-datas.service';

describe('UpdateDatasService', () => {
  let service: UpdateDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
