import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() TaskList!: Array<Task>;
  @Output() changeStatus = new EventEmitter<{status: boolean; index: number;}>();
  @Output() editTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  change(status: boolean, index: number): void {
    this.changeStatus.emit({ status, index });
  }

  eTask(index: number): void {
    this.editTask.emit(index);
  }

  dTask(index: number): void {
    this.deleteTask.emit(index);
  }
}
