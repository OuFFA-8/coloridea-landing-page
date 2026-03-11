import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface PortfolioItem {
  cat: string;
  catLabel: string;
  name: string;
  bgClass: string;
  span?: boolean;
}

interface Filter {
  key: string;
  label: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  activeFilter = 'all';

  filters: Filter[] = [
    { key: 'all', label: 'الكل' },
    { key: 'realestate', label: 'عقارات' },
    { key: 'gov', label: 'مبادرات حكومية' },
    { key: 'doc', label: 'أفلام وثائقية' },
    { key: 'national', label: 'حملات وطنية' },
  ];

  items: PortfolioItem[] = [
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      name: 'مشروع أسس السكني\n— الرياض',
      bgClass: 'pb1',
      span: true,
    },
    { cat: 'gov', catLabel: 'مبادرات حكومية', name: 'توثيق مشروع جادة', bgClass: 'pb2' },
    { cat: 'doc', catLabel: 'أفلام وثائقية', name: 'فيلم الزاملية التوثيقي', bgClass: 'pb3' },
    { cat: 'national', catLabel: 'حملات وطنية', name: 'توثيق رؤية 2030', bgClass: 'pb4' },
    { cat: 'realestate', catLabel: 'عقارات', name: 'مشروع الزاملية التجاري', bgClass: 'pb5' },
  ];

  setFilter(key: string) {
    this.activeFilter = key;
  }

  isVisible(item: PortfolioItem): boolean {
    return this.activeFilter === 'all' || item.cat === this.activeFilter;
  }
}
