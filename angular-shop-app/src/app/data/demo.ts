import { IProduct } from '../models/iproduct.model';

export const productCatalog: Array<IProduct> = [
  { _id: '1', name: 'Demo Product 1', short: 'Demo Short 1', desc: 'This in only a demo product', price: 100 },
  { _id: '2', name: 'Demo Product 2', short: 'Demo Short 2', desc: 'This in only a demo product', price: 200 },
  { _id: '3', name: 'Demo Product 3', short: 'Demo Short 3', desc: 'This in only a demo product', price: 300 },
  { _id: '4', name: 'Demo Product 4', short: 'Demo Short 4', desc: 'This in only a demo product', price: 400 }
]

export const users: Array<any> = [
  { _id: '1', firstName: 'emil', lastName: 'saxlund', email: 'emil@emil', password: 'BytMig123', role: 'admin' }
]