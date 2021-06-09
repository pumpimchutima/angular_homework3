import { Component, OnInit } from '@angular/core';
import { Key } from '../key';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  keys: Key[] = [];

  constructor() {}

  ngOnInit(): void {
    this.keys.push(
      {
        key: 'cursor',
        keyValue: 'value Cursor',
      },
      {
        key: 'find',
        keyValue: 'value Find',
      },
      {
        key: 'appearence',
        keyValue: 'value appearence ',
      },
      {
        key: 'breadcrumbs',
        keyValue: 'value breadcrumbs',
      }
    );
  }
}
