import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: any[] = [
    {
      title: 'Instructional Management System (IMS)',
      type: 'Application',
      date: '2016-present',
      image: 'ims',
      url: null,
      description: 'A UC San Diego campus-wide application that allow schedulers to plan course schedules for the year, review instructors for their unit, communicate with instructors about their teaching preferences, and generate reports about instruction',
      technologies: ['Node.js', 'Typescript', 'Angular', 'Sass']
    },
    {
      title: 'Lab Safety Training and Assessment',
      type: 'Application',
      date: '2015-16',
      image: 'ims',
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
      image: 'ims',
      url: null,
      description: '',
      technologies: ['Node.js', 'Sass', 'Grunt', 'JQuery', 'Bootstrap']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
