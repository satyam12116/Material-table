import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required]
    })
  }
 onSubmit(){
  this.http.post<any>("http://localhost:3000/register",this.registerForm.value).subscribe(res=>{

  });
  this.router.navigate(['login']);
 }
}
