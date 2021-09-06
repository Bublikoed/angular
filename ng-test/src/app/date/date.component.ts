import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  items: string[];
  constructor() {
    this.items = ['angular', 'react', 'vue', 'botstrap', 'node'];
  }

  ngOnInit(): void {
  }

}
