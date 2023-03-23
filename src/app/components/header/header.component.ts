import {
  Component,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header: any;
  menu: boolean = false;
  prevScrollpos: number = window.pageYOffset;
  currentScrollPos: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event']) scrollEl(ev: any) {
    this.currentScrollPos = ev.target.scrollingElement.scrollTop;
    this.prevScrollpos > this.currentScrollPos
      ? this.renderer.setStyle(
          this.header.nativeElement,
          'transform',
          'translateY(0%) translateY(-17px)'
        )
      : this.renderer.setStyle(
          this.header.nativeElement,
          'transform',
          'translateY(-100%) translateY(-100px)'
        );
    this.prevScrollpos = this.currentScrollPos;
  }
  toggleMenu() {
    this.menu = !this.menu;
  }
  close() {
    this.menu = !this.menu;
  }
}
