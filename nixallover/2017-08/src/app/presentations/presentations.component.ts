import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent implements OnInit {
  public presentations: any[] = [
    {
      id: 'nodejs',
      title: 'Node.js - the New Swiss Army Chainsaw',
      subtitle: 'UC San Diego Campus Lisa Talk',
      date: 'July 2015',
      url: 'http://slides.com/nixallover/nodejs',
      linkText: 'Browse slides',
      description: 'I co-presented this one hour intro to Node.js, discussing ways that our shop has utilized it to create internal tooling'
    },
    {
      id: 'brainstorm',
      title: 'Smart Text',
      subtitle: 'Adobe Illustrator Tutorial',
      date: 'August 2012',
      url: 'https://www.youtube.com/watch?v=5W3SZ_o8m5o',
      linkText: 'Watch on YouTube',
      description: 'A screencast describing how to create a custom text envelope in Illustrator. Runner up in Deke Techniques: the Challenge (Illustrator category)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
