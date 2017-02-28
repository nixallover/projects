import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skills: string[] = [
    'HTML5',
    'CSS3',
    'Sass',
    'CSS animation',
    'Angular',
    'Jade (Pug)',
    'JSTL',
    'MySQL',
    'Node.js',
    'Express.js',
    'TypeScript',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Git',
    'WordPress',
    'Cascade',
    'Trello',
    'FogBugz',
    'Jira'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
