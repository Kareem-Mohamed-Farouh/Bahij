import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-team',
  imports: [ChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  disappeerdata: string = '';

  test(data: string) {
    this.disappeerdata = data;
    document.getElementById('pp')?.classList.toggle('bg-danger');

    document.getElementById('dd')?.classList.toggle(this.disappeerdata);
  }
}
