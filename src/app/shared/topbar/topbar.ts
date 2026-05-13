import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss']
})
export class Topbar{
  
  isMenuOpen = signal<boolean>(false);
  activeLink = signal<string>('#home'); // Define o "HOME" ativo por padrão

  // Estrutura exata de links extraída da imagem image_e8f6bd.png
  navLinks: NavItem[] = [
    { label: 'Home', path: '#home' },
    { label: 'Sobre ', path: '#sobre' },
    { label: 'Transtornos Atendidos', path: '#transtornos' },
    { label: 'Serviços', path: '#servicos' },
    { label: 'Atendimento Domiciliar', path: '#home-care' },
    { label: 'Vídeos', path: '#videos' },
    { label: 'FAQ', path: '#faq' },
    { label: 'Blog ', path: '#blog' },
    { label: 'Contato', path: '#contato' }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(state => !state);
  }

  setActive(path: string): void {
    this.activeLink.set(path);
    this.isMenuOpen.set(false); // Fecha o menu mobile após clicar
  }
}