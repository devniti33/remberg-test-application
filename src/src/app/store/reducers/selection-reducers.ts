import * as actions from '../actions';
import { on, createReducer } from '@ngrx/store';

export interface SelectionState {
  data: string[]; loading: boolean; loaded: boolean; error: string;
}

export const initialState: SelectionState = {
  data: [], loading:false, loaded: false, error: ''
};

export const SelectionReducer = createReducer(
  initialState,
  on(actions.loadSelections, (state) => ({
    ...state,
    loading: true
  })),
  on(actions.updateSelections, (state) => ({
    ...state,
    loading: true
  })),
  on(actions.loadSelectionsSuccess, (state, action) => ({
    ...state,
    data: action.selections || [],
    loaded: true,
    loading: false
  })),
  on(actions.loadSelectionsError, (state, action) => ({
    ...state,
    error: action.message
  }))
);

export function reducer(state: SelectionState | undefined, action : actions.SelectionListAction){
    return SelectionReducer(state, action);
}
