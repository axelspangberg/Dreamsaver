import { Component, OnInit } from '@angular/core';
import { DreamsService } from '../dreams.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetDreams } from 'src/app/store/actions/dream.actions';
import { selectDreamList } from 'src/app/store/selectors/dream.selectors';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss'],
})
export class DreamsListComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Title',
    'Description',
    'Amount',
    'Created By',
    'Created Date',
  ];
  dreamsList = this.store.pipe(select(selectDreamList));
  // dreamsList: IDream[];

  constructor(
    readonly service: DreamsService,
    private store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetDreams());
  }
}
