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
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      this.progress = Math.min(Math.round((elapsed / duration) * 100), 100);

      if (this.progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => (this.hidden = true), 500);
      }
    };

    requestAnimationFrame(animate);
  }
}
