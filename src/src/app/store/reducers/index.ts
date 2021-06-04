import { ActionReducerMap } from '@ngrx/store';
import * as fromNames from './name-reducers';
import * as fromSelections from './selection-reducers';

export interface ApplicationState {
  readonly names: fromNames.NameState;
  readonly selections: fromSelections.SelectionState;
}

export const ApplicationReducers: ActionReducerMap<
ApplicationState,
  any
> = {
  names: fromNames.reducer,
  selections: fromSelections.reducer
};

export const APP_FEATURE = 'remberg';

export interface ApplicationStateSlice {
  readonly [APP_FEATURE]: ApplicationState;
}
