import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  Disappear(display: HTMLDivElement) {
    display.classList.add('d-none');
  }
}
