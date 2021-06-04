import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NamesFacadeMock } from '../services/name-facade.facade.mock';
import { SelectionsFacadeMock } from '../services/selection-facade.facade.mock';

import { NamesListComponent } from './names-list.component';
import { MockComponents } from 'ng-mocks';
import { MatPaginator } from '@angular/material/paginator';

describe('NamesListComponent', () => {
  let component: NamesListComponent;
  let fixture: ComponentFixture<NamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NamesListComponent,
        MockComponents(
          MatPaginator
        )
      ],
      providers: [
        NamesFacadeMock.provide(),
        SelectionsFacadeMock.provide()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
