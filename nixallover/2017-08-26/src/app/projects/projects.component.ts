import { Component, OnInit } from '@angular/core';

class Project {
  title: string;
  type: string;
  date: string;
  image: string;
  url: string;
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
      roleDescription: 'Front-end lead developer. Developed interfaces from prototype to QA.',
      description: 'A UC San Diego campus-wide application that allow schedulers to plan course schedules for the year, review instructors for their unit, communicate with instructors about their teaching preferences, and generate reports about instruction',
      technologies: ['Node.js', 'Typescript', 'Angular', 'Sass']
    },
    {
      title: 'Lab Safety Training & Assessment',
      type: 'Application',
      date: '2015-16',
      image: 'lab',
      url: null,
      roleDescription: 'Full-stack developer. Designed front and back end.',
      description: '',
      technologies: ['Node.js', 'Express.js', 'Sass', 'Jade (Pug)']
    },
    {
      title: 'Zombie Match Defense',
      type: 'Promotional Website',
      date: 'June 2015',
      image: 'zmd',
      url: 'http://zombiematchdefense.com/',
      roleDescription: 'Worked with client to design a dynamic website.',
      description: 'A promotional website for a mobile game featuring parallax scrolling and CSS3 animations',
      technologies: ['Sass', 'Skrollr.js']
    },
    {
      title: 'Amber front-end framework',
      type: 'Internal Toolset',
      date: '2014-15',
      image: 'amb',
      url: null,
      roleDescription: 'Surveyed development team to identify front end toolset needs.',
      description: '',
      technologies: ['Node.js', 'Sass', 'Grunt', 'JQuery', 'Bootstrap']
    }
  ];

  public active: Project;

  constructor() { }

  ngOnInit() {
    // temp - for development
    this.active = this.projects[0];
  }

  setActiveProject(project: Project): void {
    this.active = project;
  }

}
