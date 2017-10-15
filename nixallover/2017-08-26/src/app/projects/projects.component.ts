import { Component, OnInit } from '@angular/core';

class Project {
  title: string;
  type: string;
  date: string;
  image: string;
  url: string;
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
      description: 'A UC San Diego campus-wide application that allow schedulers to plan course schedules for the year, review instructors for their unit, communicate with instructors about their teaching preferences, and generate reports about instruction',
      technologies: ['Node.js', 'Typescript', 'Angular', 'Sass']
    },
    {
      title: 'Lab Safety Training & Assessment',
      type: 'Application',
      date: '2015-16',
      image: 'lab',
      url: null,
      description: '',
      technologies: ['Node.js', 'Express.js', 'Sass', 'Jade (Pug)']
    },
    {
      title: 'Zombie Match Defense',
      type: 'Promotional Website',
      date: 'June 2015',
      image: 'zmd',
      url: 'http://zombiematchdefense.com/',
      description: 'A promotional website for a mobile game featuring parallax scrolling and CSS3 animations',
      technologies: ['Sass', 'Skrollr.js']
    },
    {
      title: 'Amber front-end framework',
      type: 'Internal Toolset',
      date: '2014-15',
      image: 'amb',
      url: null,
      description: '',
      technologies: ['Node.js', 'Sass', 'Grunt', 'JQuery', 'Bootstrap']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
