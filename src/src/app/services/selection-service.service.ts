import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, URI, SelectionResponse } from '../dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class SelectionService {
  constructor(private readonly http: HttpClient) {}

  private readonly basePath = '/selection';

  getSelections(): Observable<SelectionResponse> {
      return this.http.get<APIResponse>(`${URI + this.basePath}`)
        .pipe(
          map(({data: {selections}}) => ({selections: selections.map(selection => selection.name_id)}))
        );
  }

  updateSelections(selections: SelectionResponse): Observable<SelectionResponse> {
    return this.http.put<APIResponse>(`${URI + this.basePath}`,selections)
      .pipe(
        map(({data: {selections}}) => ({selections: selections.map(selection => selection.name_id)}))
      );
  }
}
