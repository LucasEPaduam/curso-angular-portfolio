import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/GitHub.png',
      alt: '',
      title: "Portfolio Lucas Paduam",
      width: '100px',
      height: '100px',
      description: 'Tenho em meu repertório projetos realizados em linguagem C, C#, Java, JavaScript, TypeScript e HTML5/CSS3. Banco de dados MySQL e MongoDB. FrameWorks React e Spring e ferramentas como Node.js, PostMan, Heroku, Netlify, Twilio, Yarn, NPM, Maven e Git.',
      links: [
        {
            name: 'Conheça o meu GitHub',
            href: 'https://github.com/LucasEPaduam',
        }
    ]
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}


