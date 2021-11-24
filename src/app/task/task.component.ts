import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }
  //getting the input from task-tracker.component.html
  @Input()  list : any;
  //it contains the list of id's
  @Output() deletItem =new EventEmitter<number>();

  ngOnInit(): void {
  }
 

  //sending id to task-tracker.component.html component
  delete():void{
     this.deletItem.emit(this.list.id);
  }

}
