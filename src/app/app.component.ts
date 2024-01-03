import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimoComponent } from './components/primo/primo.component';
import { ICourse } from './types';

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
  public readonly courses: ICourse[] = [
    { title: 'course 1', price: 12, description: 'course 1' },
    { title: 'course 2', price: 13, description: 'course 2' },
    { title: 'course 3', price: 14, description: 'course 3' },
  ];
  public readonly description: string = 'primo description';
}
