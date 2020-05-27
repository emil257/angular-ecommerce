import { Actions } from '../actions/product-catalog.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

const initialState: Array<IProduct> = []

export function ProductCatalogReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.PRODUCTCATALOG_SET:
      return state = action.payload
    case ActionTypes.PRODUCTCATALOG_CLEAR:
      return state = initialState
    default:
      return state
  }
}