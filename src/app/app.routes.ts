import { Routes } from '@angular/router';
import { Proccess } from './proccess/proccess';
import { Home } from './proccess/home/home';
import { Hero } from './proccess/hero/hero';

import { Recipe } from './proccess/recipe/recipe';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Shop } from './shop/shop';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Track } from './track/track';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'process', component: Proccess },
  { path: 'home', component: Home },
  { path: 'hero', component: Hero },
  { path: 'recipe', component: Recipe },
  { path: 'header', component: Header },
  { path: 'footer', component: Footer },
  { path: 'shop', component: Shop },
  {path:'contact',component:Contact},
  {path:'about',component:About},
    {path:'track',component:Track}
];
