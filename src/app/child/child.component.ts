import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  disappeer: string = 'd-none';
  @Output() childTParentData: EventEmitter<string> = new EventEmitter();

  DataShot() {
    this.childTParentData.emit(this.disappeer);
  }
}
