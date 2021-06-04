import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SelectionService } from './selection-service.service';

describe('SelectionService', () => {
  let service: SelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SelectionService, HttpClient]
    });
    service = TestBed.inject(SelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
