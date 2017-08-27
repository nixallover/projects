import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nix-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() type: string;

  private style: string;

  constructor() { }

  public ngOnInit(): void {
    this.style = this.type || 'plain';
  }

}
