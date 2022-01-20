import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   user=(localStorage.getItem("UserName"))
   pass=(localStorage.getItem("Password"))
    luser= (localStorage.getItem("loginUserName"))
     lpass= (localStorage.getItem("loginPassword"))
  constructor() { }

  ngOnInit(): void {
  }

}
