import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://api.fundaciongenios.org/public/api/posts';
  private http = inject(HttpClient);

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/${id}`);
  }

}
