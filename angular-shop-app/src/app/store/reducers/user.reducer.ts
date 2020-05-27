import { Actions } from '../actions/user.action'
import { ActionTypes } from '../actiontypes'

let initialState: any = {
  user: null,
  isLoggedIn: false,
  loaded: false
}

export function UserReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.USER_LOAD:
      return state = {
        user: action.payload,
        isLoggedIn: true,
        loaded: true
      }
    case ActionTypes.USER_LOGOUT:
      return state = {
        user: null,
        isLoggedIn: false,
        loaded: true
      }
    default:
      return state
  }
}