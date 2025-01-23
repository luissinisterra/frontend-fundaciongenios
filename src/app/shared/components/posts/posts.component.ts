import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/guards/services/api.service';
import { IPost } from '../../../core/guards/models/post.interface';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  private apiService = inject(ApiService);
  protected posts: IPost[] = []; 

  ngOnInit() {
    console.log("Posts: ", this.posts);
    this.apiService.getPosts().subscribe(posts => this.posts = posts);  
  }
}
