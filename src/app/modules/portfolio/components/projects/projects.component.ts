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
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: 'PAPAPAPAPAPAPAPAPAPAPPAPAPAPAPAPAPAPAPPAP',
      links: [
        {
            name: 'Conheça',
            href: '',
        }
    ]
    },
    {
      src: 'assets/img/Foto_Lucas_Perfil.jpg',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: 'PAPAPAPAPAPAPAPAPAPAPPAPAPAPAPAPAPAPAPPAP',
      links: [
        {
            name: 'Conheça',
            href: '',
        }
    ]
    },
    {
      src: 'assets/img/Foto_Lucas_Perfil.jpg',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: 'PAPAPAPAPAPAPAPAPAPAPPAPAPAPAPAPAPAPAPPAP',
      links: [
        {
            name: 'Conheça',
            href: '',
        }
    ]
    },
    {
      src: 'assets/img/Foto_Lucas_Perfil.jpg',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
            name: 'Conheça',
            href: '',
        }
    ]
    },
    {
      src: 'assets/img/Foto_Lucas_Perfil.jpg',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
            name: 'Conheça',
            href: '',
        }
    ]
    },
    {
      src: 'assets/img/Foto_Lucas_Perfil.jpg',
      alt: '',
      title: "Fullstack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
            name: 'Conheça',
            href: '',
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


