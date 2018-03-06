import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Babel';
  }

}
