import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

export class Set implements Action {
  public readonly type = ActionTypes.PRODUCT_SET
  constructor(public payload: IProduct) { }
}

export class Clear implements Action {
  public readonly type = ActionTypes.PRODUCT_CLEAR
  constructor() { }
}

export type Actions = Set | Clear