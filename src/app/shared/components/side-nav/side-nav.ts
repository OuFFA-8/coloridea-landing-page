import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';

interface NavDot {
  target: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav implements OnInit, OnDestroy {
  dots: NavDot[] = [
    { target: 'home', label: 'الرئيسية', active: true },
    { target: 'about', label: 'من نحن', active: false },
    { target: 'services', label: 'خدماتنا', active: false },
    { target: 'portfolio', label: 'أعمالنا', active: false },
    { target: 'clients', label: 'عملاؤنا', active: false },
    { target: 'contact', label: 'تواصل', active: false },
  ];

  private observer!: IntersectionObserver;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.dots.forEach((d) => (d.active = d.target === entry.target.id));
          }
        });
      },
      { threshold: 0.4 },
    );

    this.dots.forEach((d) => {
      const el = document.getElementById(d.target);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.observer?.disconnect();
    }
  }

  scrollTo(target: string) {
    if (!this.isBrowser) return;

    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}
