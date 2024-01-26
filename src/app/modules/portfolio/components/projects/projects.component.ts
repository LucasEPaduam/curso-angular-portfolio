import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
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

}
