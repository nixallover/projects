import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

class Project {
  title: string;
  type: string;
  date: string;
  image: string;
  url: string;
  roleTitle: string;
  roleDescription: string[];
  description: string;
  technologies: string[];
}

@Component({
  selector: 'nix-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger(
      'fadeBack',
      [
        state('in', style( {
          opacity: 1,
          transform: 'scale(1) translateY(0, 0)'
        } )),
        transition(':enter', [ style({
          opacity: 0,
          transform: 'scale(.9) translateY(100px)'
        }), animate( 200 ) ]),
        transition(':leave', [ animate( 200, style({
          opacity: 0,
          transform: 'scale(.9) translateY(100px)'
        })) ])
      ]
    )
  ]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [
    {
      title: 'Instructional Scheduling Assistant',
      type: 'Application',
      date: '2016-present',
      image: 'isa',
      url: null,
      roleTitle: 'Front-end lead developer',
      roleDescription: [
        'Built 15+ interfaces based on mockups from UX lead and stakeholder input',
        'Produced clean, reusable Angular components and optimized module bundling',
        'Developed application styles based on campus standards',
        'Implemented end-to-end and unit tests'
      ],
      description: 'A UC San Diego campus-wide application that allow schedulers to plan course schedules for the year, review instructors for their unit, communicate with instructors about their teaching preferences, and generate scheduling reports.',
      technologies: ['Node.js', 'Angular', 'Typescript', 'Protractor', 'Sass']
    },
    {
      title: 'Lab Safety Training & Assessment',
      type: 'Application',
      date: '2015-16',
      image: 'lab',
      url: null,
      roleTitle: 'Full-stack developer',
      roleDescription: [
        'Built an Express back-end that served a static, paginated training guide and semi-randomized multiple choice assessment',
        'Created logic for a semi-randomized assessment (a certain number of questions are drawn from each subject in the training)',
        'Created interfaces using Jade templates from mockups',
        'Helped conduct user acceptance testing with students'
      ],
      description: 'A module for students and instructional assistants in the division to fulfill lab safety training requirements once a quarter. User is guided through a static training guide, and then completes a timed assessment. Once the training has been completed at least once, a history of previous attempts is available. The quarter this application is currently qualifying for is dynamically determined.',
      technologies: ['Node.js', 'Express.js', 'Sass', 'Jade (Pug)']
    },
    {
      title: 'Zombie Match Defense',
      type: 'Promotional Website',
      date: 'June 2015',
      image: 'zmd',
      url: 'http://zombiematchdefense.com/',
      roleTitle: 'Developer',
      roleDescription: [
        'Worked with client to develop a dynamic website matching his vision',
        'Built custom CSS3 animations using original game assets',
        'Tested on desktop and mobile platforms'
      ],
      description: 'A promotional website for a mobile game featuring parallax scrolling and CSS3 animations',
      technologies: ['Sass', 'CSS animations', 'CSS sprite sheet animations', 'Skrollr.js', 'Jade (Pug)']
    },
    {
      title: 'Amber front-end framework',
      type: 'Internal Toolset',
      date: '2014-15',
      image: 'amb',
      url: null,
      roleTitle: 'Developer',
      roleDescription: [
        'Surveyed development team to identify front-end needs and UX pain points',
        'Assembled a library of custom and externally-sourced components',
        'Built an extensive style guide for developers outlining practical use and best practices',
        'Ported toolset from Java Servlet environment to Express and Jade'
      ],
      description: 'An opinionated suite of front-end tooling specially assembled for the Division of Biological Sciences at UC San Diego. Sitting on top of bootstrap, this ',
      technologies: ['Node.js', 'Sass', 'Grunt', 'JQuery', 'Bootstrap']
    }
  ];

  public active: Project;

  constructor() { }

  ngOnInit() {
    // temp - for development
    //this.active = this.projects[0];
  }

  setActiveProject(project: Project): void {
    this.active = project;
  }

}
