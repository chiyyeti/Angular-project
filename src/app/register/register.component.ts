import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // regForm= new FormGroup({
  //   ename: new FormControl(''),
  //   epass: new FormControl('')
  // })

  // get ename(){
  //   return this.regForm.get("ename");
  // }
  // get epass(){
  //   return this.regForm.get("epass");
  // }

  // addData(){
  //   console.log(this.regForm.value);
  //   localStorage.setItem("regForm",JSON.stringify(this.regForm.value))
  // }

  onSubmit(form:NgForm){
    console.log(form.value.uename);
    console.log(form.value.upass);
    localStorage.setItem("UserName", form.value.uename)
    localStorage.setItem("Password",form.value.upass)
    window.alert("Data Submitted")
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
