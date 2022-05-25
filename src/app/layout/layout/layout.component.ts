import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public arrTask: Array<Task> = [
    { name: 'HTML5', check: true },
    { name: 'CSS3', check: true },
    { name: 'JavaScript', check: true },
    { name: 'Angular CLI', check: false },
  ];
  public taskName: string = '';
  public editTaskName: string = '';
  public editIndex!: number;
  public editStatus: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  
  addTask(): void {
    if (this.taskName != '') {
      this.arrTask.push({ name: this.taskName, check: false });
      this.taskName = '';
    }
  }

  checkStatus(obj: any): void {
    this.arrTask[obj.index].check = !obj.status;
  }

  editTask(index: number): void {
    this.editStatus = true;
    this.editIndex = index;
    this.editTaskName = this.arrTask[index].name;
  }

  deleteTask(index: number): void {
    this.arrTask = this.arrTask.filter((item, i) => i != index);
    this.editTaskName = '';
    this.editStatus = false;
  }

  renameTask(): void {
    if (this.editTaskName != '') {
      this.arrTask[this.editIndex].name = this.editTaskName;
      this.editTaskName = '';
      this.editStatus = false;
    }
  }
}
