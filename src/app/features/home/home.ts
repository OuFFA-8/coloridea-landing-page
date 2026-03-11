import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { About } from '../../shared/components/about/about';
import { Clients } from '../../shared/components/clients/clients';
import { Contact } from '../../shared/components/contact/contact';
import { Hero } from '../../shared/components/hero/hero';
import { Portfolio } from '../../shared/components/portfolio/portfolio';
import { Services } from '../../shared/components/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, About, Services, Portfolio, Clients, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
