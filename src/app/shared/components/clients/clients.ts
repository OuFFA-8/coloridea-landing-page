import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  logos = [
    { src: 'assets/clients/osos.png', alt: 'أسس العقارية' },
    { src: '/شعارات العملاء_لوقو الزاملية.png', alt: 'الزاملية' },
    { src: '/شعارات العملاء_لوقو جادو.png', alt: 'جادة المشاريع' },
    { src: 'assets/clients/majedia.png', alt: 'الماجدية' },
    // أضف المزيد هنا بنفس الشكل
  ];
}
