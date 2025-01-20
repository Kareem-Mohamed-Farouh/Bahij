import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  disappeer: string = 'disappeer';
  @Output() childTParentData: EventEmitter<string> = new EventEmitter();

  DataShot() {
    this.childTParentData.emit(this.disappeer);
  }

  Disappear() {
    if (this.disappeer == 'disappeer') {
      document.getElementById('dd')?.classList.toggle('d-none');
      document.getElementById('pp')?.classList.toggle('d-none');
    }
  }
}
