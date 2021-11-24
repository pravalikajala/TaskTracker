import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {
  //DEclaring variables of different types
  title:string="Task Tracker";
  show:boolean=true
  id:number=1;

  constructor() { }

  ngOnInit(): void {
  }
  //this method gets called when button click event is occured in task-tracker.html
  saveTask()
  {
    this.show =!this.show;

  }
  //fake Json data for our conviniance
  list = [
    {id:1, myTask:"Create own Task", myDate:'dd-mm-yyyy'}
  ]

  //Adding task to list
  AddItem(value:any){
    //incrementing the id
    this.id++;
    //pushing values in to list
    this.list.push({id:this.id, ...value})

  }

  //Deleting Record from  list
  deleteItem(value:any){
    //filtering the list based on id
   this.list = this.list.filter(t => t.id !== value);
  }
}
