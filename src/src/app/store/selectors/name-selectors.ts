import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApplicationState, APP_FEATURE } from '../reducers';

export const getNameState = createFeatureSelector<
ApplicationState
>(APP_FEATURE);

export const nameState = createSelector(
    getNameState,
  ({ names }) => names
);

export const getNamesandCount = createSelector(
  nameState,
  ({data,count}) => ({names: data,count})
)

export const getAllNames = createSelector(
    nameState,
  ({ data }) => data || []
);

export const getNamesLoading = createSelector(
    nameState,
  ({ loading}) => loading
);

export const getNamesLoaded = createSelector(
    nameState,
  ({ loaded }) => loaded
);


export const getNamesError = createSelector(
  nameState,
  ({ error }) => error
);
