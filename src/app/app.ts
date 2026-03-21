import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { CommonModule } from '@angular/common';
import { Cursor } from './shared/components/cursor/cursor';
import { Loader } from './shared/components/loader/loader';
import { ProgressBar } from './shared/components/progress-bar/progress-bar';
import { SideNav } from './shared/components/side-nav/side-nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    Navbar,
    Footer,
    Loader,
    Cursor,
    ProgressBar,
    SideNav,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ci-portal';
}
