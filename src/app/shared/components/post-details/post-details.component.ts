import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { IPost } from '../../../core/guards/models/post.interface';
import { ApiService } from '../../../core/guards/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {

  apiService = inject(ApiService);
  route: ActivatedRoute = inject(ActivatedRoute);
  post?: IPost;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.apiService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
