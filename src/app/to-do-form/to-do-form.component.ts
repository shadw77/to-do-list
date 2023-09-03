import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {
  @Input() item : any;

  @Output() addEvent = new EventEmitter();

  AddnewItem(item:any){
    this.addEvent.emit(item.value);
    item.value = ''
    
  }


}
