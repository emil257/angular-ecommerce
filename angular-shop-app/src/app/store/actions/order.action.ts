import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'

export class Get implements Action {
  public readonly type = ActionTypes.ORDER_GET
  constructor(public payload: Array<any>) { }
}

export type Actions = Get 