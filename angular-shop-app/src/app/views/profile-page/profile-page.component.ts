import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public data
  public user

  constructor(private userService: UserService, private store: Store<any>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.loadUser()
    this.store.select(store => store.user).subscribe(res => this.data = res)
    this.store.select(store => store.user).subscribe(res => this.user = res.user)
  }

  ngDoCheck(): void {
    if (!this.data.isLoggedIn && this.data.loaded)
      this.router.navigate(['login'], { relativeTo: this.route })
  }

  capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

