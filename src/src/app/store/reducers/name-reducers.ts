import * as actions from '../actions';
import { on, createReducer } from '@ngrx/store';
import { NameResponse } from 'src/app/dto';

export interface NameState {
  data: NameResponse[]; loading: boolean; loaded: boolean; count: number; error: string;
}

export const initialState: NameState = {
  data: [], loading:false, loaded: false, count: 0, error: ''
};

export const NameReducer = createReducer(
  initialState,
  on(actions.loadNames, (state) => ({
    ...state,
    loading: true
  })),
  on(actions.loadNamesSuccess, (state, action) => ({
    ...state,
    data: action.data.names || [],
    count: action.data.count || 0,
    loaded: true,
    loading: false
  })),
  on(actions.loadNamesError, (state, action) => ({
    ...state,
    error: action.message
  }))
);

export function reducer(state: NameState | undefined, action : actions.NamesListAction){
    return NameReducer(state, action);
}
