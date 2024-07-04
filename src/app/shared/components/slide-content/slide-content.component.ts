import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-content.component.html',
  styleUrl: './slide-content.component.scss'
})
export class SlideContentComponent {
  public content = {
    backWord: 'axel eldrian hadiwibowo',
  };

  public duplication = [0,1];
}
