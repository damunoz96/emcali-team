import { Routes } from '@angular/router';
import { HomePage } from '../modules/home/pages/home-page';
import { PlayersPage } from '../modules/players/pages/players-page';
import { GamesPage } from '../modules/games/pages/games-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'games',
    component: GamesPage
  },
  {
    path: 'players',
    component: PlayersPage
  },
];
