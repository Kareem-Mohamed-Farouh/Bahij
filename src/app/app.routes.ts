import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamComponent } from './team/team.component';
import { MealComponent } from './meal/meal.component';
import { SeaFoodComponent } from './sea-food/sea-food.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakFastComponent } from './break-fast/break-fast.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  {
    path: 'meals',
    component: MealComponent,
    title: 'Meals',
    children: [
      { path: '', redirectTo: 'seafood', pathMatch: 'full' },
      { path: 'pasta', component: PastaComponent, title: 'Pasta' },
      { path: 'seafood', component: SeaFoodComponent, title: 'SeaFood' },
      { path: 'breakfast', component: BreakFastComponent, title: 'Breakfast' },
      { path: '**', component: NotFoundComponent, title: 'Not found Page' },
    ],
  },
  { path: 'team', component: TeamComponent, title: 'team' },
  { path: 'contacts', component: ContactsComponent, title: 'Contact' },
  { path: '**', component: NotFoundComponent, title: 'Not found Page' },
];
