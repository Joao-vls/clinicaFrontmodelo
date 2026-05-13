import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SentimentOption {
  value: number;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss']
})
export class ContactFormComponent {
  
  // Controle reativo do sentimento escolhido
  selectedSentiment = signal<number | null>(null);

  // Mapeamento dos ícones baseado no design (Triste a Muito Feliz)
  sentiments: SentimentOption[] = [
    { value: 1, icon: 'bi-emoji-frown', label: 'Muito Insatisfeito' },
    { value: 2, icon: 'bi-emoji-expressionless', label: 'Insatisfeito' },
    { value: 3, icon: 'bi-emoji-smile', label: 'Neutro' },
    { value: 4, icon: 'bi-emoji-laughing', label: 'Satisfeito' },
    { value: 5, icon: 'bi-emoji-grin', label: 'Muito Satisfeito' }
  ];

  selectSentiment(value: number): void {
    this.selectedSentiment.set(value);
  }

  onSubmit(): void {
    // Trate os dados do formulário e o sinal de sentimento aqui
    console.log('Sentimento selecionado:', this.selectedSentiment());
  }
}