import { Action } from '@ngrx/store';

export enum EDreamsActions {
  GetDreams = '[Dream] Get Dreams',
  GetDreamsSuccess = '[Dream] Get Dreams Success',
  CreateDream = '[Dream] Create Dream',
  CreateDreamSuccess = '[Dream] Create Dream Success',
}

export class GetDreams implements Action {
  public readonly type = EDreamsActions.GetDreams;
}

export class GetDreamsSuccess implements Action {
  public readonly type = EDreamsActions.GetDreamsSuccess;
  constructor(public payload: IDream[]) {}
}

export class CreateDream implements Action {
  public readonly type = EDreamsActions.CreateDream;
  constructor(public payload: IDreamRequest) {}
}

export class CreateDreamSuccess implements Action {
  public readonly type = EDreamsActions.CreateDreamSuccess;
  constructor(public payload?: any) {}
}

export type DreamActions =
  | GetDreams
  | GetDreamsSuccess
  | CreateDream
  | CreateDreamSuccess;
