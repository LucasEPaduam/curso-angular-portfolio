import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: '1 - Fullstack Developer',
        p: 'IFSP | Set 2020 - Present',
      },
      text: '<p>DescriçãoDescriçãoDescriçãoDescriçãoDescrição.</p>',
    },
    {
      summary: {
        strong: '2 - Fullstack Developer',
        p: 'IFSP | Set 2020 - Present',
      },
      text: '<p>DescriçãoDescriçãoDescriçãoDescriçãoDescrição.</p>',
    },
    {
      summary: {
        strong: '3 - Fullstack Developer',
        p: 'IFSP | Set 2020 - Present',
      },
      text: '<p>DescriçãoDescriçãoDescriçãoDescriçãoDescrição.</p>',
    },
  ]);
}
