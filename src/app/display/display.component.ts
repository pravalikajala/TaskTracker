import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
 //Declaring a variable
  id:number = 1;
//it consist of the values which we entered in form
  @Output() addToList =new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  //Creating a form Using formGroup amnd FormControl
  myForm= new FormGroup({
    myTask:new FormControl('',[Validators.required]),
    myDate:new FormControl('',[Validators.required])

  })
  //Adding the values in to addToList
  AddItem(){
      this.addToList.emit(this.myForm.value);
      //after adding clearing the form
      this.myForm.value.Task = '';
      this.myForm.reset();
  }
 

  
 

}
