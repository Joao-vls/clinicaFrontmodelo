import { 
  Component, Input, signal, ElementRef, AfterViewInit, viewChild, 
  inject, PLATFORM_ID 
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Importação essencial

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  templateUrl: './doctor-card.html',
  styleUrls: ['./doctor-card.scss']
})
export class DoctorCard implements AfterViewInit {
  @Input() name: string = '';
  @Input() specialty: string = '';
  @Input() description: string = '';
  @Input() doctorImg: string = '';
  @Input() bgImage: string = '';
  @Input() direction: 'left' | 'right' = 'left';

  isVisible = signal(false);
  cardRef = viewChild<ElementRef>('cardRef');

  // Injeta o ID da plataforma para checar se é browser ou servidor
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    // Só executa o IntersectionObserver se estiver no navegador
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible.set(true);
          observer.disconnect();
        }
      }, { threshold: 0.2 });

      const element = this.cardRef();
      if (element) {
        observer.observe(element.nativeElement);
      }
    } else {
      // Opcional: No servidor (SSR), você pode definir como true 
      // para o conteúdo já vir renderizado no HTML inicial
      this.isVisible.set(true);
    }
  }
}