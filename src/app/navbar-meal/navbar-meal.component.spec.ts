import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMealComponent } from './navbar-meal.component';

describe('NavbarMealComponent', () => {
  let component: NavbarMealComponent;
  let fixture: ComponentFixture<NavbarMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
