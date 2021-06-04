import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApplicationState, APP_FEATURE } from '../reducers';

export const getSelectionState = createFeatureSelector<
ApplicationState
>(APP_FEATURE);

export const selectionState = createSelector(
    getSelectionState,
  ({ selections }) => selections
);

export const getAllSelections = createSelector(
    selectionState,
  ({ data }) => data || []
);

export const getSelectionsLoading = createSelector(
    selectionState,
  ({ loading}) => loading
);

export const getSelectionsLoaded = createSelector(
    selectionState,
  ({ loaded }) => loaded
);


export const getSelectionsError = createSelector(
    selectionState,
  ({ error }) => error
);
