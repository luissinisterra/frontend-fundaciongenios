import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/guards/services/api.service';
import { IPost } from '../../../core/guards/models/post.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  private apiService;
  protected posts: IPost[]; 

  constructor() {
    this.apiService = inject(ApiService);
    this.posts = [];
   }

  ngOnInit() {
    this.apiService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }
  
}
