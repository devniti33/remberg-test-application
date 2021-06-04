import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Set } from 'immutable';
import { NameAPIResponse, NameResponse } from 'src/app/dto';
import { NamesFacade } from '../services/name-facade.facade';
import { SelectionsFacade } from '../services/selection-facade.facade';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.scss']
})
export class NamesListComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private readonly nameFacade: NamesFacade,
    private readonly selectionFacade: SelectionsFacade
  ) { }

  readonly namesAndCount$ = this.nameFacade.namesAndCount$;
  readonly namesLoading$ = this.nameFacade.nameLoading$;
  readonly namesLloaded$ = this.nameFacade.nameLoaded$;
  readonly namesError$ = this.nameFacade.nameError$

  readonly selections$ = this.selectionFacade.selections$;
  readonly selectionsLoading$ = this.selectionFacade.selectionsLoading$;
  readonly selectionsLoaded$ = this.selectionFacade.selectionsLoaded$;
  readonly selectionsError$ = this.selectionFacade.selectionsError$;

  readonly displayedColumns: string[] = ['select', 'title', 'first', 'last'];
  readonly dataSource =  new MatTableDataSource<NameResponse>([]);

  paginatorSubscription: Subscription;
  datasourceSubscription: Subscription;
  selectiosSubscription: Subscription;
  selections: Set<string> = Set([]);

  @ViewChild('namePageChange') paginator: MatPaginator;

  ngOnInit(): void {
    this.nameFacade.getNames(1,10);
    this.selectionFacade.getSelections();
  }

  ngAfterViewInit(): void {
    this.paginatorSubscription = this.paginator.page.subscribe(page => {
      this.nameFacade.getNames(page.pageIndex + 1, page.pageSize);
    });
    this.datasourceSubscription = this.namesAndCount$.subscribe(({names, count}) => {
      this.dataSource.data = names;
      this.paginator.length = count;
    });
    this.selectiosSubscription = this.selections$.subscribe((data) => {
      this.selections = Set(data);
    });
  }

  masterToggle(event:any) {
    if(event.checked){
      this.selectionFacade.updateSelections([...this.selections], true);
      return;
    }
    this.selectionFacade.updateSelections([]);
  }

  isAllSelected(data: NameAPIResponse) {
    return this.selections.size === data.count;
  }

  hasValue() {
    return !this.selections.isEmpty();
  }

  toggle(event: any,id: string) {
    if(!event.checked) {
      this.selections = this.selections.remove(id);
    } else {
      this.selections = this.selections.add(id);
    }
    this.selectionFacade.updateSelections([...this.selections]);
  }

  isSelected(id: string) {
    return this.selections.has(id);
  }

  ngOnDestroy(): void {
    this.paginatorSubscription.unsubscribe();
    this.datasourceSubscription.unsubscribe();
    this.selectiosSubscription.unsubscribe();
  }
}
