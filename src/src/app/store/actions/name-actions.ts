import { createAction, props } from '@ngrx/store';
import { NameAPIResponse } from 'src/app/dto';
export const getNames = createAction('get names');

export const loadNames = createAction(
  'load names',
  props<{limit: number; page: number}>()
);

export const loadNamesSuccess = createAction(
  'load names success',
  props<{data: NameAPIResponse}>()
);

export const loadNamesError = createAction(
  'load names error',
  props<{ message: string }>()
);

export type NamesListAction =
  | typeof loadNames
  | typeof loadNamesSuccess
  | typeof loadNamesError;