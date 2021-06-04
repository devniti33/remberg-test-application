import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { NameService } from '../../services/name-service.service';

@Injectable({
  providedIn: 'root'
})
export class NameEffect {
      loadNames$ = createEffect(() =>
        this.actions$.pipe(
          ofType(actions.loadNames),
          switchMap(({limit, page}) => 
            this.nameService.getNames(page,limit)
            .pipe(map((data) => actions.loadNamesSuccess({data})))
          ),
          catchError(error => of(actions.loadNamesError({message: error})))
        )
      );

    constructor(
        private actions$: Actions, 
        private nameService: NameService
      ) {}
}