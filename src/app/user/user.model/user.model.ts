
export interface User{
  userName:string;
  userEmail:string;
  cellNumber:string;
  address:Address;
  message:string;
}

export interface Address{
    line1:string;
    line2:string;
    pin:number;
} 