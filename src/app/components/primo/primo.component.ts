import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ICourse } from '../../types';

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
    required: true, // При желании мы можем пометить Input как необходимый
    alias: 'primo-title', // можно определить псевдоним с помощью объекта конфигурации
  })
  public title!: string;

  // входные преобразования позволяют заменить использование геттеров и сеттеров
  @Input({
    alias: 'primo-description',
    transform: (value: string) => value.toLocaleUpperCase(), // при этом входном преобразовании любая строка, переданная на вход имени, будет мгновенно преобразована в верхний регистр
  })
  public description!: string;

  @Input({
    transform: booleanAttribute,
  })
  public status: boolean = false;

  private _courses!: ICourse[];

  // Это может быть полезно в ситуациях, когда вы хотите применить какое-либо преобразование к значению, передаваемому компоненту
  @Input({ required: true })
  get courses(): ICourse[] {
    return this._courses;
  }

  set courses(courses: ICourse[]) {
    this._courses = courses;
  }
}
