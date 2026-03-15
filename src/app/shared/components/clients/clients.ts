import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  logos = [
    { src: '/clients/شعارات العملاء_اسس.png', alt: 'أسس العقارية' },
    { src: '/clients/شعارات العملاء_لوقو الزاملية.png', alt: 'الزاملية' },
    { src: '/clients/شعارات العملاء_لوقو جادو.png', alt: 'جادة المشاريع' },
  ];
}
