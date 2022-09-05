import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  userBox: string = "Username";
  
  ngOnInit(): void {


    var user=document.getElementById("user")
    var err_msg=document.getElementsByClassName("user-error")[0];

    user?.addEventListener('keyup',(event)=>{
      console.log(event);
      /*
      if(!(String(event.target.value).match(/^[a-zA-Z0-9-_\-]{3,18}$/))){
        user?.classList.add('error-input')
        err_msg?.style.display="block";
        console.log(" In valid input")
      }
      else{
        user?.classList.remove('error-input');
        err_msg?.style.display="none";
      }
      */
    })


  }

}
