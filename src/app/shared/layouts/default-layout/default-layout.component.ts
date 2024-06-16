import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, FooterComponent } from '../../components';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
