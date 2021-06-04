import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as a from '../store/actions';
import * as s from '../store/selectors';
import { SelectionState } from '../store/reducers/selection-reducers';

@Injectable({
    providedIn: 'root'
})
export class SelectionsFacade {
  readonly selectionsState$ = this.store.select(
    s.selectionState
  );
  readonly selectionsLoading$ = this.store.select(
    s.getSelectionsLoading
  );
  readonly selectionsLoaded$ = this.store.select(
    s.getSelectionsLoaded
  );
  readonly selectionsError$ = this.store.select(
    s.getSelectionsError
  );
  readonly selections$ = this.store.select(
    s.getAllSelections
  );

  constructor(
    private readonly store: Store<SelectionState>
  ) {}

  getSelections() {
    this.store.dispatch(a.loadSelections());
  }

  updateSelections(selections: string[], all: boolean = false) {
      this.store.dispatch(a.updateSelections({selections, all}));
  }
}
