import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  clients = [
    'أسس العقارية',
    'الزاملية',
    'جادة المشاريع',
    'أسس العقارية',
    'الزاملية',
    'جادة المشاريع',
    'أسس العقارية',
    'الزاملية',
  ];
}
