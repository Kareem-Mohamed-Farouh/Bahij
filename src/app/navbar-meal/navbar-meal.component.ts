import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-meal',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-meal.component.html',
  styleUrl: './navbar-meal.component.css',
})
export class NavbarMealComponent {}
