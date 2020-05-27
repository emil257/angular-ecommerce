import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from 'src/app/models/iproduct.model'

let initialState: Array<IProduct> = []

export function ShoppingCartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SHOPPINGCART_ADD:
      let exists = false
      let a_cart = [...state]
      a_cart.forEach(item => {
        if (item._id === action.payload._id) {
          exists = true
        }
      })
      if (exists) {
        let _index = a_cart.findIndex(p => { return p._id === action.payload._id })
        a_cart = a_cart.map((item, index) => {
          if (index !== _index) {
            return item
          }
          let newItem = { _id: item._id, product: item.product, quantity: item.quantity + 1 }
          return newItem
        })
      }
      else {
        a_cart.push({
          _id: action.payload._id,
          product: {
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image
          },
          quantity: 1
        })
      }
      return state = a_cart
    case ActionTypes.SHOPPINGCART_REMOVE:
      let r_cart = [...state]

      r_cart.forEach((item, i = 0) => {
        if (item._id === action.payload) {
          r_cart.splice(i, 1)
        }
        i++
      })
      return state = r_cart
    case ActionTypes.SHOPPINGCART_CHANGE_QNT:
      let q_cart = [...state]
      let _index = q_cart.findIndex(p => { return p._id === action.payload.id })
      q_cart = q_cart.map((item, index) => {
        if (index !== _index) {
          return item
        }
        let newItem = { _id: item._id, product: item.product, quantity: item.quantity + action.payload.incdec }
        return newItem
      })

      //Remove if qnt is 0
      q_cart.map((item, index) => {
        if (item._id === action.payload.id && item.quantity === 0) {
          q_cart.splice(index, 1)
        }
      })
      return state = q_cart
    case ActionTypes.SHOPPINGCART_CLEAR:
      return state = []
    default:
      return state
  }
}