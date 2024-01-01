import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'np-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-angular';
}
