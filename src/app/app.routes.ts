import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { PostDetailsComponent } from './shared/components/post-details/post-details.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Fundación genios' },
    { path: 'news', component: PostsComponent, title: 'Noticias' },
    { path: 'details/:id', component: PostDetailsComponent, title: 'Detalles' },
    { path: 'contact', component: ContactComponent, title: 'Contacto' },
    { path: 'about-us', component: AboutComponent, title: 'Sobre nosotros' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
