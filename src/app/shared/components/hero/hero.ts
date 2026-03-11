import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  scrollTo(id: string) {
    if (!this.isBrowser) return;

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const els = document.querySelectorAll('#home .reveal');

    setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'));
    }, 200);
  }
}
