import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakFastComponent } from '../break-fast/break-fast.component';
import { SeaFoodComponent } from '../sea-food/sea-food.component';
import { PastaComponent } from '../pasta/pasta.component';

@Component({
  selector: 'app-navbar-meal',
  imports: [
    RouterLink,
    RouterLinkActive,
    BreakFastComponent,
    SeaFoodComponent,
    PastaComponent,
  ],
  templateUrl: './navbar-meal.component.html',
  styleUrl: './navbar-meal.component.css',
})
export class NavbarMealComponent {}
