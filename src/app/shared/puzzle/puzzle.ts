import { AfterViewInit, Component, ElementRef, PLATFORM_ID, inject, signal, viewChildren } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

type PieceId = 'yellow' | 'blue' | 'green' | 'orange';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puzzle.html',
  styleUrls: ['./puzzle.scss']
})
export class Puzzle implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  pieceRefs = viewChildren<ElementRef<HTMLElement>>('pieceRef');

  visiblePieces = signal<Record<PieceId, boolean>>({
    yellow: false, blue: false, green: false, orange: false
  });


  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-piece') as PieceId;
            if (id) {
              this.visiblePieces.update(v => ({ ...v, [id]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { 
        threshold: 0.05, // Disparo imediato para peças gigantes
        rootMargin: '0px 0px -10% 0px' 
      }
    );

    requestAnimationFrame(() => {
      this.pieceRefs().forEach(piece => observer.observe(piece.nativeElement));
    });
  }
}