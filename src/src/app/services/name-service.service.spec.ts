import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NameService } from './name-service.service';

describe('NameService', () => {
  let service: NameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NameService, HttpClient]
    });
    service = TestBed.inject(NameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
