import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss'],
})
export class PageBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
