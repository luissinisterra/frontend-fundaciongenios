import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home page' },
    { path: 'noticias', component: PostsComponent, title: 'Post page' },
];
