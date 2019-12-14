import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  GetDreams,
  EDreamsActions,
  GetDreamsSuccess,
} from '../actions/dream.actions';
import { DreamsService } from 'src/app/dreams/dreams.service';
import { of } from 'rxjs';

@Injectable()
export class DreamEffects {
  @Effect()
  getDreams$ = this.actions$.pipe(
    ofType<GetDreams>(EDreamsActions.GetDreams),
    switchMap(() => this.dreamService.getDreamLists()),
    switchMap((dreams: IDream[]) => of(new GetDreamsSuccess(dreams))),
  );

  constructor(
    private dreamService: DreamsService,
    private actions$: Actions,
    private store: Store<IAppState>,
  ) {}
}
