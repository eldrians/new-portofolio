import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'progressive-image',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './progressive-image.component.html',
  styleUrl: './progressive-image.component.scss',
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlBase!: string;

  public isLoaded = false;

  public onImageLoad() {
    this.isLoaded = true;
  }
}
