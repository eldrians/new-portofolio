import { Component } from '@angular/core';
import { ProgressiveImageComponent } from '../../../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProgressiveImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
