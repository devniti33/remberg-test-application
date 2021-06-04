import { createAction, props } from '@ngrx/store';
import { SelectionResponse, SelectionRequest } from 'src/app/dto';
export const getSelections = createAction('get selections');

export const loadSelections = createAction(
  'load selections'
);

export const updateSelections = createAction(
  'update selections',
  props<SelectionRequest>()
);

export const loadSelectionsSuccess = createAction(
  'load selections success',
  props<SelectionResponse>()
);

export const loadSelectionsError = createAction(
  'load error error',
  props<{ message: string }>()
);

export type SelectionListAction =
  | typeof loadSelections
  | typeof updateSelections
  | typeof loadSelectionsSuccess
  | typeof loadSelectionsError;