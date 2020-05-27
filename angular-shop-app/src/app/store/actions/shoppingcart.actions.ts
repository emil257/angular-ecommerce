import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

export class Add implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_ADD
  constructor(public payload: IProduct) { }
}

export class Remove implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_REMOVE
  constructor(public payload: string) { }
}

export class ChangeQnt implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_CHANGE_QNT
  constructor(public payload: { id: string, incdec: number }) { }
}

export class Clear implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_CLEAR
  constructor() { }
}

export type Actions = Add | Remove | ChangeQnt | Clear