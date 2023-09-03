import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent {
 itemsList: Array<any>=[''];

 received(item:any){
    this.itemsList.push(item);  
 }
 removeItem(i:any){
   this.itemsList.splice(i,1);
  
 }
}
