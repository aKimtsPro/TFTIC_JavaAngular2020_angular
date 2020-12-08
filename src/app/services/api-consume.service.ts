import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model'

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {
  
  private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return <Observable<Post[]>> this.client.get(this.BASE_URL + "/posts"); // as Observable<Post[]>; (pareil)
  }

  getPost(id: number): Observable<Post> {
    return <Observable<Post>> this.client.get(this.BASE_URL + '/posts/' + id);
  }

  postPost(post : Post): Observable<any> {
    return this.client.post(this.BASE_URL + '/posts', post);
  }

}
