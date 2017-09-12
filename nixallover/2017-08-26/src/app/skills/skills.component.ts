import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skillList: any[] = [
    [
      {
        title: 'CSS3',
        comment: ''
      },
      {
        title: 'Sass',
        comment: ''
      },
      {
        title: 'CSS animation',
        comment: ''
      },
      {
        title: 'HTML5',
        comment: ''
      },
      {
        title: 'Adobe Photoshop',
        comment: ''
      },
      {
        title: 'Adobe Illustrator',
        comment: ''
      }
    ],

    [
      {
        title: 'Angular',
        comment: 'Just over a year working with Angular 2+'
      },
      {
        title: 'TypeScript',
        comment: ''
      },
      {
        title: 'Node.js',
        comment: ''
      },
      {
        title: 'JSTL',
        comment: ''
      },
      {
        title: 'Express.js',
        comment: ''
      },
      {
        title: 'MySQL',
        comment: ''
      },
      {
        title: 'Jade (Pug)',
        comment: ''
      },
    ],

    [
      {
        title: 'Git',
        comment: ''
      },
      {
        title: 'WordPress',
        comment: ''
      },
      {
        title: 'Cascade CMS',
        comment: 'This CMS from Hannon Hill is UC San Diego'
      },
      {
        title: 'Trello',
        comment: ''
      },
      {
        title: 'FogBugz',
        comment: ''
      },
      {
        title: 'Jira',
        comment: ''
      }
    ]
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
