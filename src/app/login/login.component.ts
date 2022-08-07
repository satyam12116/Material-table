import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 login=new Login();
 users:Login[]=[];
 valid=true;
 @ViewChild('uname') usernameElement!:Element;
 loginForm!:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private loginService:LoginService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe((users:any)=>this.users=users);
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
 onSubmit(){
  this.login=this.loginForm.getRawValue();
  const user=this.users.filter(currUser=>currUser.userName===this.login.userName && currUser.password===this.login.password)[0];
  if(user){
    this.loginService.username=this.login.userName;
    this.router.navigate(['/dashboard']);
  }
  else{
    this.valid=false;
  }
 }
}
