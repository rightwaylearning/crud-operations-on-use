import { Component, OnInit } from '@angular/core';
import { Address, User } from './user.model/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] =[];
  fullName:string = '';
  userEmail:string = '';
  userCell:string='';
  line1:string=''
  line2:string=''
  pin:number=0;
  message:string =''

  constructor() {}

  ngOnInit(): void {}

  saveOrUpdate():void{
    let userObject:User = {
      userName:this.fullName,
      userEmail:this.userEmail,
      cellNumber:this.userCell,
      address :{
        line1:this.line1,
        line2:this.line2,
        pin:this.pin
      } as Address,
      message:this.message
    } as User;

    this.users.push(userObject);

  }

  
}
