import { Actions } from '../actions/product.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

const initialState: IProduct = {}

export function ProductReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.PRODUCT_SET:
      return state = action.payload

    case ActionTypes.PRODUCT_CLEAR:
      return state = initialState

    default:
      return state
  }
}