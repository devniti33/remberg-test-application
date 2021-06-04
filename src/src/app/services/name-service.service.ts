import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NameAPIResponse, APIResponse, URI } from '../dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class NameService {
  constructor(private readonly http: HttpClient) {}

  private readonly basePath = '/names';

  getNames(page: number, limit: number): Observable<NameAPIResponse> {
      return this.http.get<APIResponse>(`${URI + this.basePath}?limit=${limit}&page=${page}`)
        .pipe(
          map(({data: {names, count}}) => ({names, count})));
  }
}
