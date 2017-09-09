import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nix-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() type: string;
  public randomInt: number;

  private style: string;

  constructor() { }

  public ngOnInit(): void {
    this.style = this.type || 'plain';
    this.randomInt = this.getRandomInt();
  }

  private getRandomInt(): number {
    return Math.floor((Math.random() * 3) + 1);
  }

}
