import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement as HTMLElement;

    element.classList.add('reveal');

    if (this.revealDelay) {
      element.classList.add(`reveal-delay-${this.revealDelay}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('visible');
            this.observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 },
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.observer?.disconnect();
    }
  }
}
