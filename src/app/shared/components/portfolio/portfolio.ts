import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealDirective } from '../../directives/reveal.directive';

export interface PortfolioItem {
  cat: string;
  catLabel: string;
  company: string;
  name: string;
  bgClass: string;
  span?: boolean;
  videoId: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  activeFilter = signal('all');
  showAll = signal(false);
  activeVideo = signal<SafeResourceUrl | null>(null);
  activeVideoTitle = signal('');

  constructor(private sanitizer: DomSanitizer) {}

  filters = [
    { key: 'all', label: 'الكل' },
    { key: 'realestate', label: 'عقارات' },
    { key: 'gov', label: 'مبادرات حكومية' },
    { key: 'doc', label: 'أفلام وثائقية' },
    { key: 'national', label: 'حملات وطنية' },
  ];

  allItems: PortfolioItem[] = [
    // ── عقارات ──
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة جادة المشاريع',
      name: 'فيلم مشاريع جادة',
      bgClass: 'pb1',
      span: true,
      videoId: '1KxQZWvXwbypbnfpI8RyUXYmhkOG1v8En',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة جادة المشاريع',
      name: 'فيلم تحديثات التقدم — جادة الصفا',
      bgClass: 'pb2',
      videoId: '13w2Vfwx_uqDj_abxA-vg6il-2J1JaNRX',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة جادة المشاريع',
      name: 'فيلم حكاية المساء',
      bgClass: 'pb3',
      videoId: '13kZfolodyQVANbbT93NHEmRnTACg3aQe',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة جادة المشاريع',
      name: 'لأن البيت قصة',
      bgClass: 'pb4',
      videoId: '1dCPnvz1clNrFeMzB0XHB-6wIFfoOxVhN',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة جادة المشاريع',
      name: 'تقرير تطور مشروع جادة 46',
      bgClass: 'pb5',
      videoId: '1p4kTz1ZZubVMq1FVk9wl7GGtlz_njVwc',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة الماجدية',
      name: 'فيلم إنجازات 2025',
      bgClass: 'pb6',
      videoId: '1WMdPk11Uoc8-FUBekQ7PJr76U3Ik5Dfg',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة أسس',
      name: 'فيلم أبراج طريق الملك سلمان',
      bgClass: 'pb7',
      videoId: '18LWHS7_yL0Lua2K4HRY7sg8juOPmtHjV',
    },
    {
      cat: 'realestate',
      catLabel: 'عقارات',
      company: 'شركة الزاملية',
      name: 'فيلم إيلاف جدة',
      bgClass: 'pb8',
      videoId: '1xqobEcY5zvZGRYqLbq4BIicfc5ypMNos',
    },
    // ── مبادرات حكومية — أضف لينكاتها ──
    {
      cat: 'gov',
      catLabel: 'مبادرات حكومية',
      company: '',
      name: 'توثيق مشروع جادة',
      bgClass: 'pb2',
      videoId: '',
    },
    // ── أفلام وثائقية — أضف لينكاتها ──
    {
      cat: 'doc',
      catLabel: 'أفلام وثائقية',
      company: '',
      name: 'فيلم الزاملية التوثيقي',
      bgClass: 'pb3',
      videoId: '',
    },
    // ── حملات وطنية — أضف لينكاتها ──
    {
      cat: 'national',
      catLabel: 'حملات وطنية',
      company: '',
      name: 'توثيق رؤية 2030',
      bgClass: 'pb4',
      videoId: '',
    },
  ];

  // لما الفلتر "الكل" — يجيب واحد من كل كاتيجوري
  get filteredItems(): PortfolioItem[] {
    const filter = this.activeFilter();

    let result: PortfolioItem[];

    if (filter === 'all') {
      const seen = new Set<string>();
      result = this.allItems.filter((item) => {
        if (seen.has(item.cat)) return false;
        seen.add(item.cat);
        return true;
      });
    } else {
      result = this.allItems.filter((i) => i.cat === filter);
    }

    return result;
  }

  get visibleItems(): PortfolioItem[] {
    return this.showAll() ? this.filteredItems : this.filteredItems.slice(0, 5);
  }

  get hasMore(): boolean {
    return this.filteredItems.length > 5;
  }

  setFilter(key: string) {
    this.activeFilter.set(key);
    this.showAll.set(false);
  }

  toggleShowAll() {
    this.showAll.set(!this.showAll());
  }

  openVideo(item: PortfolioItem) {
    if (!item.videoId) return;
    this.activeVideoTitle.set(item.name);
    this.activeVideo.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://drive.google.com/file/d/${item.videoId}/preview`,
      ),
    );
  }

  closeVideo() {
    this.activeVideo.set(null);
    this.activeVideoTitle.set('');
  }
}
