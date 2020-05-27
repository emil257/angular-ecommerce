import { Actions } from '../actions/order.action'
import { ActionTypes } from '../actiontypes'

let initialState: any = []


export function OrderReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ORDER_GET:
      return state = action.payload
    default:
      return state
  }
}