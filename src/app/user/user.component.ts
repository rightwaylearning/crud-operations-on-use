import { Component, OnInit } from '@angular/core';
import { Address, User } from './user.model/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] =[];
  fullName:string = '+91';
  userEmail:string = '';
  userCell:string = '';
  line1:string ='';
  line2:string = '';
  pin:number = 0;
  message:string ='';
  isDisabled:boolean = false;
  isActiveButton:boolean = true;
  
  constructor() {
    this.deafultValue();
  }

  ngOnInit(): void {}



  saveOrUpdate():void{
     if(this.isEmailExist(this.userEmail)){
        alert("Email id is duplicate , please change it!!");
     }else{
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
      
       this.deafultValue();
     }
  }

  deafultValue():void{
    this.fullName = '';
    this.userEmail = '';
    this.userCell='+91 ';
    this.line1='';
    this.line2='';
    this.pin=0;
    this.message ='';
  }
 
  updateRecord(user:User):void{
    this.fullName = user.userName;
    this.userEmail = user.userEmail;
    this.userCell=user.cellNumber;
    this.line1= user.address.line1;
    this.line2=user.address.line2;
    this.pin= user.address.pin
    this.message =user.message;

    this.isDisabled = true;
    this.isActiveButton = false;
  }

  removeRecord(mailId:string):void{
    
    let updatedArray:User[] = [];

    for(let i = 0; i< this.users.length; i++){
       if(this.users[i].userEmail != mailId){
        updatedArray.push(this.users[i]);
       }
    }

    this.users = updatedArray;

  }
  
  updateButton():void{
    let updatedUserObject:User = {
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


    for(let i = 0; i< this.users.length; i++){
      if(this.users[i].userEmail == this.userEmail){
        this.users[i] = updatedUserObject;

        this.isDisabled = false;
        this.isActiveButton = true;
        this.deafultValue();
        break;
      }

      
     
   }

  }

  isEmailExist(emailId:string):boolean{
    for(let i = 0; i< this.users.length; i++){
      if(this.users[i].userEmail == emailId){
       return true;
        break;
      }
    }
    return false;
  }

}
