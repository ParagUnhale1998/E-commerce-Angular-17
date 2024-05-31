import { Directive, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appScrollToTop]',
  standalone: true
})
export class ScrollToTopDirective {

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Optionally, you can add logic here to handle scrolling behavior while scrolling
  }

  @HostListener('document:scroll', ['$event'])
  onDocumentScroll() {
    // Optionally, you can add logic here to handle scrolling behavior while scrolling
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}