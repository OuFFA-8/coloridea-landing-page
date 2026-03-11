import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor.html',
  styleUrl: './cursor.css',
})
export class Cursor {
  x = -100;
  y = -100;

  @HostListener('document:mousemove', ['$event'])
  on(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
