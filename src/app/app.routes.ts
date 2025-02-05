import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { PostDetailsComponent } from './shared/components/post-details/post-details.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home page' },
    { path: 'news', component: PostsComponent, title: 'Post page' },
    { path: 'details/:id', component: PostDetailsComponent, title: 'Post details page' },
    { path: 'contact', component: ContactComponent, title: 'Contact page' },
    { path: 'about-us', component: AboutComponent, title: 'About us page' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
