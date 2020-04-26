import { Component, OnInit, createPlatformFactory } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from'@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm=this.formBuilder.group({
      email:new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    })
  }

}


