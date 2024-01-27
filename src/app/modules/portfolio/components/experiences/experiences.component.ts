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
        strong: 'Desenvolvedor Fullstack | Estágio',
        p: 'Instituto de Pesquisas Eldorado | Ago 2022 - Dez 2023',
      },
      text: '<p>Manutenção e criação de novas funcionalidades em plataformas customizadas da Atlassian (Java, Javascript e Velocity).</p>',
    },
    {
      summary: {
        strong: 'Bolsista | Iniciação Científica',
        p: 'IFSP | Mai 2021 - Nov 2021',
      },
      text: '<p>Pesquisa referente a Implementação de Métodos para Extração de Conteúdo Tabular em Documentos PDF(JAVA).</p>',
    },
    {
      summary: {
        strong: 'Proprietário',
        p: 'Salgadelícia | 2015 - 2019',
      },
      text: '<p>Produção de produtos alimentícios, criação e divulgação de material publicitário, gestão financeira e administrativa, atendimento ao público e compra de recursos.</p>',
    },
    {
      summary: {
        strong: 'Assistente Administrativo Sênior',
        p: 'Nucleo Engenharia | 2013 - 2014',
      },
      text: '<p>Coordenar e supervisionar os trabalhos desenvolvidos pela equipe do Arquivo Técnico Central do Órgão da PETROBRAS responsável pela Implementação de Empreendimentos para Refinaria do Nordeste (RNEST).</p>',
    },
  ]);
}
