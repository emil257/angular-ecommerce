import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { IRegisterUser } from '../models/iregisteruser';
import * as UserActions from '../store/actions/user.action'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string = 'http://localhost:80/api/users/'

  constructor(private http: HttpClient, private store: Store) { }

  register(user) {
    this.http.post<IRegisterUser>(this._baseUrl + 'register', user).subscribe(
      res => this.login({ email: user.email, password: user.password }),
      err => console.log(err)
    )
  }
  login(user) {
    this.http.post<any>(this._baseUrl + 'login', user).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.loadUser()
      },
      err => console.log(err)
    )
  }
  logout() {
    localStorage.removeItem('token')
    this.store.dispatch(new UserActions.Logout())
  }
  loadUser() {
    let token = localStorage.getItem('token')
    if (token !== null) {
      this.http.get<any>(this._baseUrl + 'user', { headers: { 'Authorization': 'bearer ' + token } }).subscribe(
        res => {
          this.store.dispatch(new UserActions.Load(res))
        },
        err => {
          this.logout()
        }
      )
    }
    else {
      this.logout()
    }
  }
}
