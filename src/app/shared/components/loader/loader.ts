import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader implements OnInit {
  progress = 0;
  hidden = false;

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress = Math.min(this.progress + Math.floor(Math.random() * 12) + 3, 100);
      if (this.progress >= 100) {
        clearInterval(interval);
        setTimeout(() => (this.hidden = true), 500);
      }
    }, 60);
  }
}
