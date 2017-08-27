import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nix-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private contactLinks: any[] = [
    // {
    //   title: 'E-mail',
    //   url: 'mailto:nicole@nixallover.com',
    //   icon: 'envelope'
    // },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nicolesoliver',
      icon: 'linkedin'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/nixallover',
      icon: 'twitter'
    },
    {
      title: 'Pinterest',
      url: 'https://www.pinterest.com/nixallover/',
      icon: 'pinterest'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/nixallover',
      icon: 'github'
    },
    {
      title: 'JS Fiddle',
      url: 'http://jsfiddle.net/user/nixallover/fiddles/',
      icon: 'jsfiddle'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
