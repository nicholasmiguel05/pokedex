import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule]
})
export class DetalhesPage implements OnInit {
  favoritos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    const data = localStorage.getItem('favoritos');
    this.favoritos = data ? JSON.parse(data) : [];
  }

  abrirDetalhes(id: string) {
    this.router.navigate([`/tabs/detalhes`, id]);
  }

  getTranslatedType(type: string): string {
    const translations: { [key: string]: string } = {
      fire: 'Fogo',
      water: 'Água',
      grass: 'Grama',
      poison: 'Tóxico',
      electric: 'Elétrico',
      flying: 'Voo',
      bug: 'Inseto',
      normal: 'Normal',
      ground: 'Terra',
      fairy: 'Fada',
      fighting: 'Lutador',
      psychic: 'Psíquico',
      rock: 'Pedra',
      ghost: 'Fantasma',
      ice: 'Gelo',
      dragon: 'Dragão',
      dark: 'Sombrio',
      steel: 'Aço'
    };
    return translations[type.toLowerCase()] || type;
  }
}
