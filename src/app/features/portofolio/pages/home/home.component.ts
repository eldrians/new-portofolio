import { Component } from '@angular/core';
import { ProgressiveImageComponent } from '../../../../shared/components';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProgressiveImageComponent, HeroSectionComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
