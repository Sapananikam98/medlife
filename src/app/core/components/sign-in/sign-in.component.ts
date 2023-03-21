import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm!: FormGroup;
  
  isNewUser:boolean = false ;
  constructor(private fb:FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.signInForm = this.fb.group({
      "userName":[],
      "password":[]
    })
  }

  signIn(){
    
  }

}
