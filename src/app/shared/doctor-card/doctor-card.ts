import { Component, Input, signal, ElementRef, AfterViewInit, viewChild } from '@angular/core';

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

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isVisible.set(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (this.cardRef()) {
      observer.observe(this.cardRef()!.nativeElement);
    }
  }
}