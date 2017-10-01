import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skillList: any[] = [
    [
      'HTML5',
      'CSS3',
      'Sass',
      'CSS animation',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
    [
      'Angular',
      'Jade (Pug)',
      'JSTL',
      'MySQL',
      'Node.js',
      'Express.js',
      'TypeScript',
    ],
    [
      'Git',
      'WordPress',
      'Cascade CMS',
      'Trello',
      'FogBugz',
      'Jira'
    ]
  ];
  
  constructor() {}

  ngOnInit() {}

}
