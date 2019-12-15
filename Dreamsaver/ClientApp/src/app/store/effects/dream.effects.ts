import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import {
  GetDreams,
  EDreamsActions,
  GetDreamsSuccess,
  CreateDream,
  CreateDreamSuccess,
} from '../actions/dream.actions';
import { DreamsService } from 'src/app/dreams/dreams.service';

@Injectable()
export class DreamEffects {
  @Effect()
  getDreams$ = this.actions.pipe(
    ofType<GetDreams>(EDreamsActions.GetDreams),
    switchMap(() => this.dreamService.getDreamLists()),
    switchMap((dreams: IDream[]) => of(new GetDreamsSuccess(dreams))),
  );

  @Effect()
  createDream$ = this.actions.pipe(
    ofType<CreateDream>(EDreamsActions.CreateDream),
    switchMap(request =>
      this.dreamService
        .saveDreams(request.payload)
        .pipe(map(() => this.toastr.success('Saved'))),
    ),
    switchMap(() => of(new CreateDreamSuccess())),
  );

  constructor(
    private dreamService: DreamsService,
    private actions: Actions,
    private toastr: ToastrService,
  ) {}
}
