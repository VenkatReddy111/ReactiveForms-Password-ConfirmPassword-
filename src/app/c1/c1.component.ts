import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PipeService } from '../pipe.service';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
   registrationForm:FormGroup;
  constructor(private fb:FormBuilder,private pipe:PipeService) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(4)]],
      passWord:['',[Validators.required,Validators.minLength(4)]],
      confirmPassword:['',[Validators.required,Validators.minLength(4)]],
      email:[''],
      subscribe:[false]
    })
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(changedValue=>{
     const Email=this.registrationForm.get('email');
      if(changedValue){
         Email.setValidators(Validators.required);

      }else{
        Email.clearValidators();
      }
      Email.updateValueAndValidity();
    })
    
   
  }
 

  submitForm(){
   return this.pipe.sendData(this.registrationForm.value).subscribe(data=>{
      console.log(data)
    });
   
  }

  get userName(){
    return this.registrationForm.get('userName');
  }
  get passWord(){
    return this.registrationForm.get('passWord');
  }
  get confirmpassWord(){
    return this.registrationForm.get('confirmPassword')
  }
  get email(){
    return this.registrationForm.get('email')

  }

  onLoad(){
    return this.registrationForm.setValue({
      userName:"venkat",
      passWord:"vr123",
      confirmPassword:"vr123",
      email:"venkat.vv564@gmail.com",
      subscribe:false
    })
  }
}
