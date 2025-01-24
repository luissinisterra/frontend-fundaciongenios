import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { PostDetailsComponent } from './shared/components/post-details/post-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home page' },
    { path: 'news', component: PostsComponent, title: 'Post page' },
    { path: 'details/:id', component: PostDetailsComponent, title: 'Post details page' },
];
