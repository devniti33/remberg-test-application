import { ClassProvider } from '@angular/core';
import { EMPTY } from 'rxjs';
import { SelectionsFacade } from './selection-facade.facade';

export class SelectionsFacadeMock
  implements Omit<SelectionsFacade, 'store'> {
  readonly selectionsState$ = EMPTY;
  readonly selectionsLoading$ = EMPTY;
  readonly selectionsLoaded$ = EMPTY;
  readonly selections$ = EMPTY;
  readonly selectionsError$ = EMPTY;

  static provide(): ClassProvider {
    return {
      provide: SelectionsFacade,
      useClass: SelectionsFacadeMock
    };
  }

  getSelections = () => {};
  updateSelections = () => {};
}
