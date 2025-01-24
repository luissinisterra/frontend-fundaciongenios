import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/guards/services/api.service';
import { IPost } from '../../../core/guards/models/post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  private apiService = inject(ApiService);
  protected posts: IPost[] = []; 

  ngOnInit() {
    this.apiService.getPosts().subscribe(data => this.posts = data);
  }
}
