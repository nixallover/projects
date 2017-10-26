import { Component, OnInit } from '@angular/core';

class Project {
  title: string;
  type: string;
  date: string;
  image: string;
  url: string;
  roleTitle: string;
  roleDescription: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'nix-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Project[] = [
    {
      title: 'Instructional Scheduling Assistant',
      type: 'Application',
      date: '2016-present',
      image: 'isa',
      url: null,
      roleTitle: 'Front-end lead developer',
      roleDescription: 'Built 20+ interfaces based on mockups from UX lead and stakeholder input. Produced clean, reusable Angular components and optimized module bundling. Developed application styles based on campus standards. Implemented end-to-end tests.',
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
      roleDescription: 'Designed the application from top to bottom.',
      description: 'A module for students and instructional assistants in the division to fulfill lab safety training requirements once a quarter. User is guided through a static training guide, and then completes a timed assessment. Once the training has been completed at least once, a history of previous attempts is available. The quarter this application is currently qualifying for is dynamically determined. Quiz questions are semi-randomized (a certain number are drawn from each subject in the training). ',
      technologies: ['Node.js', 'Express.js', 'Sass', 'Jade (Pug)']
    },
    {
      title: 'Zombie Match Defense',
      type: 'Promotional Website',
      date: 'June 2015',
      image: 'zmd',
      url: 'http://zombiematchdefense.com/',
      roleTitle: 'Developer',
      roleDescription: 'Worked with client to develop a dynamic website matching his vision.',
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
      roleDescription: 'Surveyed development team to identify front end toolset needs. Assembled a library of custom and externally-sourced components. Built an extensive styleguide outlining practical use and best practices.',
      description: 'An opinionated suite of front-end tooling specially assembled for the Division of Biological Sciences at UC San Diego.',
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
