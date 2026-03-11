import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  phone = '';

  submit() {
    if (this.phone.trim()) {
      alert(`شكراً! سيتواصل معك فريقنا على الرقم: ${this.phone}`);
      this.phone = '';
    }
  }
}
