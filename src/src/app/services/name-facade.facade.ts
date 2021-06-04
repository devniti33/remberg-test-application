import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as a from '../store/actions';
import * as s from '../store/selectors';
import { NameState } from '../store/reducers/name-reducers';

@Injectable({
    providedIn: 'root'
})
export class NamesFacade {
  readonly nameState$ = this.store.select(
    s.nameState
  );
  readonly nameLoading$ = this.store.select(
    s.getNamesLoading
  );
  readonly nameLoaded$ = this.store.select(
    s.getNamesLoaded
  );
  readonly namesAndCount$ = this.store.select(
      s.getNamesandCount
  );
  readonly nameError$ = this.store.select(
      s.getNamesError
  );

  constructor(
    private readonly store: Store<NameState>
  ) {}

  getNames(page: number, limit: number) {
    this.store.dispatch(a.loadNames({page,limit}));
  }
}
