import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor() {}
  @ViewChild('nav') navEl: ElementRef;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const offset = window.pageYOffset;
    if (offset > 10) {
      $(this.navEl.nativeElement).removeClass('navbar-dark');
      $(this.navEl.nativeElement).addClass(
        'navbar-light bg-light navbar-fixed'
      );
      $(this.navEl.nativeElement).css('padding', '5px 25px');
      $(this.navEl.nativeElement).css('font-size', '15px');
    } else {
      $(this.navEl.nativeElement).addClass('navbar-dark');
      $(this.navEl.nativeElement).removeClass(
        'navbar-light bg-light navbar-fixed'
      );
      $(this.navEl.nativeElement).css('padding', '20px');
      $(this.navEl.nativeElement).css('font-size', '18px');
    }
  }
  setActive(event) {
    $('.active.nav-item').removeClass('active');
    var idAttr = event.currentTarget.id;
    $('#' + idAttr).addClass('active');
  }
  ngOnInit(): void {}
}
