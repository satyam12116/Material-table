import { HttpClient } from '@angular/common/http';
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
  constructor(private router:Router,private formBuilder:FormBuilder,private loginService:LoginService,private renderer:Renderer2,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe((users:any)=>this.users=users);
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
 onSubmit(){
  this.http.get<any>("http://localhost:3000/register").subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.userName===this.loginForm.value.userName && a.password===this.loginForm.value.password
    })
    if(user){
   
      this.router.navigate(['/dashboard']);
    }
 })
  
 }
}
