import { ClassProvider } from '@angular/core';
import { EMPTY } from 'rxjs';
import { NamesFacade } from './name-facade.facade';

export class NamesFacadeMock
  implements Omit<NamesFacade, 'store'> {
  readonly nameState$ = EMPTY;
  readonly nameLoading$ = EMPTY;
  readonly nameLoaded$ = EMPTY;
  readonly namesAndCount$ = EMPTY;
  readonly nameError$ = EMPTY;

  static provide(): ClassProvider {
    return {
      provide: NamesFacade,
      useClass: NamesFacadeMock
    };
  }

  getNames= () => {};
}
