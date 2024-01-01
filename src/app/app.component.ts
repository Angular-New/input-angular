import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimoComponent } from './components/primo/primo.component';

@Component({
  selector: 'np-root',
  standalone: true,
  imports: [CommonModule, PrimoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly title: string = 'Angular @Input';
  public readonly childTitle: string = 'Primo Component';
}
