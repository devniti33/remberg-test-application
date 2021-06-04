import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { SelectionService } from 'src/app/services/selection-service.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionEffect {
      loadSelections$ = createEffect(() =>
        this.actions$.pipe(
          ofType(actions.loadSelections),
          switchMap(() => 
            this.selectionService.getSelections()
            .pipe(map((data) => actions.loadSelectionsSuccess(data)))
          ),
          catchError(error => of(actions.loadSelectionsError({message: error})))
        )
      );

      updateSelections$ = createEffect(() =>
        this.actions$.pipe(
          ofType(actions.updateSelections),
          switchMap((selections) =>
            this.selectionService.updateSelections(selections)
            .pipe(map((data) => actions.loadSelectionsSuccess(data)))
          ),
          catchError(error => of(actions.loadSelectionsError({message: error})))
        )
      );

    constructor(
        private actions$: Actions, 
        private selectionService: SelectionService
      ) {}
}