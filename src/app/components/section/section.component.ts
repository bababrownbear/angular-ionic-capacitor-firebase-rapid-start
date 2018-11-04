import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
@Input() title;
@Input() bgColor;
@Input() textColor;
@Input() bodyText;

  constructor() { }

  ngOnInit() {
  }

}