import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigations } from '../components/navigations/navigations'
import { Hero } from '../components/contents/hero/hero'
import { Career } from '../components/contents/career/career'
import { Education } from '../components/contents/education/education'
import { Experiance } from '../components/contents/experiance/experiance'
import { CurrentRole } from '../components/contents/current-role/current-role'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero, Navigations, Career,Education,Experiance,CurrentRole],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
