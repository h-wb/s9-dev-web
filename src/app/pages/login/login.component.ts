import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private userService: UserService, private fb: FormBuilder) { }

  signIn() {
    this.userService.signIn(this.profileForm.value.name, this.profileForm.value.password);
  }



  ngOnInit() { }

}
