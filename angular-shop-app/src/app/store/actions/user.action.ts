import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IUser } from '../../models/iuser.model'

export class Load implements Action {
  public readonly type = ActionTypes.USER_LOAD
  constructor(public payload: IUser) { }
}

export class Logout implements Action {
  public readonly type = ActionTypes.USER_LOGOUT
  constructor() { }
}

export type Actions = Load | Logout