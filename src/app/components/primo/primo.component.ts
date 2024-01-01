import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'np-primo',
  standalone: true,
  imports: [],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimoComponent {
  @Input({
    required: true,
  })
  public title!: string;
}
