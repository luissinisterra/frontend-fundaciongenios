import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { IPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string;
  private http = inject(HttpClient);

  constructor() {
    this.apiUrl = 'https://api.fundaciongenios.org/public/api/posts';
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/${id}`);
  }

}
