import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  public user

  constructor(private userService: UserService, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(store => store.user).subscribe(res => this.user = res.user)
  }

  logout() {
    this.userService.logout()
  }
}
