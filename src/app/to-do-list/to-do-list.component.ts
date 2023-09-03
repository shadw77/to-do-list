import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() item : any;
  @Input() i : any;
  @Output() delEvent = new EventEmitter();
  isCompleted = false;
  isItems = false;
  constructor(){
    if(document.getElementById('ite')?.innerText != null){
      this.isItems=true;
    }
  }
  removeItem(i:any){
    this.delEvent.emit(i);
    console.log(i);    
  }
  Complete(event:any,i:any){
    if(event.target.innerText == "undo" && this.isCompleted == true){
      event.target.innerText = "Complete";
      this.isCompleted = false;

    }
    else{
      this.isCompleted = true;
      event.target.innerText = "undo"   
  }}
 

}
