import { Action } from '@ngrx/store';

export enum EDreamsActions {
  GetDreams = '[Dream] Get Dreams',
  GetDreamsSuccess = '[User] Get Dreams Success',
}

export class GetDreams implements Action {
  public readonly type = EDreamsActions.GetDreams;
}

export class GetDreamsSuccess implements Action {
  public readonly type = EDreamsActions.GetDreamsSuccess;
  constructor(public payload: IDream[]) {}
}

export type DreamActions = GetDreams | GetDreamsSuccess;
