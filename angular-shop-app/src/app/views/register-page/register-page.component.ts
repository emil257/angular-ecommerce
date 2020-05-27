import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public regForm: FormGroup
  public data

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private store: Store<IState>) { }

  ngOnInit(): void {
    this.userService.loadUser()
    this.store.select(store => store.user).subscribe(res => this.data = res)
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: [''],
      password: ['', Validators.minLength(5)]
    })
  }


  ngDoCheck(): void {
    if (this.data.isLoggedIn && this.data.loaded)
      this.router.navigate(['profile'])
  }

  onSubmit() {
    this.userService.register(this.regForm.value)
  }
}
