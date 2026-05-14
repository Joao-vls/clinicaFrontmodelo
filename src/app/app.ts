import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Puzzle } from "./shared/puzzle/puzzle";
import { Hero } from "./shared/hero/hero";
import { DoctorCard } from './shared/doctor-card/doctor-card';
import { ContactFormComponent } from "./shared/contact-form/contact-form";
import { Topbar } from './shared/topbar/topbar';
import { Footer } from "./shared/footer/footer";

interface DoctorData {
  name: string;
  specialty: string;
  description: string;
  doctorImg: string;
  bgImage: string;
  direction: 'left' | 'right';
}

@Component({
  selector: 'app-root',
  imports: [Puzzle, Hero, DoctorCard, ContactFormComponent, Topbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clinica');
  doctors: DoctorData[] = [
    {
      name: 'Dra. Mariana Alves',
      specialty: 'Pediatra',
      description: 'Com carinho e dedicação, a Dra. Mariana acompanha cada etapa do desenvolvimento infantil, garantindo que crianças cresçam saudáveis e felizes.',
      doctorImg: 'm3.png',
      bgImage: 'bgm1.png',
      direction: 'left'
    },
    {
      name: 'Dra. Camila Duarte',
      specialty: 'Nutricionista',
      description: 'A Dra. Camila acredita que a alimentação é um dos pilares da saúde integral. Com planos nutricionais personalizados, ela orienta pacientes a adotarem hábitos saudáveis.',
      doctorImg: 'm2.png',
      bgImage: 'bgm2.png',
      direction: 'right' // Inverte a posição do médico e a animação panorama
    },
    {
      name: 'Dr. Ricardo Menezes',
      specialty: 'Médico do Trabalho',
      description: 'Especialista em Saúde e Segurança do Trabalho, o Dr. Ricardo atua na prevenção de riscos ocupacionais e na promoção de ambientes laborais mais seguros.',
      doctorImg: 'm1.png',
      bgImage: 'bgm3.png',
      direction: 'left'
    }
  ];
}
