import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Service {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: Service[] = [
    {
      num: '01',
      title: 'نظام التوثيق الزمني الذكي',
      desc: 'أنظمة تصوير مستمرة مثبتة على الموقع تلتقط كل مرحلة بدقة عالية وتسلسل زمني محكم مع أرشفة سحابية آمنة',
    },
    {
      num: '02',
      title: 'التقارير والمراقبة البصرية',
      desc: 'تقارير دورية شاملة مدعومة بالصور والبيانات البصرية لمتابعة تقدم المشروع وتقديمها للمعنيين بأعلى احترافية',
    },
    {
      num: '03',
      title: 'الإنتاج الوثائقي الاستراتيجي',
      desc: 'أفلام وثائقية احترافية تحكي قصة مشروعك وتبرز إنجازاته بأسلوب إبداعي يخلّد الإرث لعقود قادمة',
    },
    {
      num: '04',
      title: 'حلول التوثيق الجوي والموقعي',
      desc: 'تصوير جوي بالدرون وتوثيق ميداني شامل يغطي كل زاوية من زوايا مشروعك بأعلى جودة ودقة ممكنة',
    },
  ];
}
