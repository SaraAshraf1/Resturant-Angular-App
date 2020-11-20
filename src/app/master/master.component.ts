import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  constructor() {}
  @ViewChild('arrowUp') arrowEl: ElementRef;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const offset = window.pageYOffset;
    if (offset > 10) {
      $(this.arrowEl.nativeElement).removeClass('invisible');
      $(this.arrowEl.nativeElement).addClass('visible');
    } else {
      $(this.arrowEl.nativeElement).removeClass('visible');
      $(this.arrowEl.nativeElement).addClass('invisible');
    }
  }

  ngOnInit(): void {}
}
