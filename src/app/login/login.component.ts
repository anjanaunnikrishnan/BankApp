import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  anju: "click me" = "click me";
  account:"enter the account number"="enter the account number";
  acno='';
  pswd= '';
  //database
  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:1000},
    1001:{acno:1001,username:"Arjun",password:1001,balance:1000},
    1002:{acno:1002,username:"Anju",password:1002,balance:1000}
  }
  acnoChange(event:any){
    console.log(event);
    this.acno=event.target.value; //1000
console.log(this.acno);
  }
  pswdChange(event:any){
    console.log(event);
    this.pswd=event.target.value;
console.log(this.pswd);
  }

  // login(){
  //   //alert("Login Clicked");
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password'])
  //     {
  //       alert('Login successful');
  //     }
  //     else{
  //       alert('invalid password');
  //     }

  //   }
  //   else{
  //     alert('invaild user details');
  //   }

  // }
  login(a:any,p:any){
    //alert("Login Clicked");
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password'])
      {
        alert('Login successful');
      }
      else{
        alert('invalid password');
      }

    }
    else{
      alert('invaild user details');
    }

  }
}


