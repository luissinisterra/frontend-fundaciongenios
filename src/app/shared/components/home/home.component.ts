import { Component, inject, OnInit } from '@angular/core';
import { IPost } from '../../../core/guards/models/post.interface';
import { ApiService } from '../../../core/guards/services/api.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})  
export class HomeComponent implements OnInit {
  private apiService = inject(ApiService);
  protected posts: IPost[] = []; 

  ngOnInit() {
    console.log("Posts: ", this.posts);
    this.apiService.getPosts().subscribe(posts => this.posts = posts);  
  }
}
