import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup
  public data

  constructor(private formBuilder: FormBuilder, private userService: UserService, private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.userService.loadUser()
    this.store.select(store => store.user).subscribe(res => this.data = res)

    if (this.data.isLoggedIn)
      console.log('pushing')
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.minLength(5)]
    })
  }

  ngDoCheck(): void {
    if (this.data.isLoggedIn && this.data.loaded)
      this.router.navigate(['profile'])
  }

  onSubmit() {
    this.userService.login(this.loginForm.value)
  }
}
