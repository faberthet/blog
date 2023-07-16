import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  appiBaseUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) {}

  getAllPosts():Observable<Post[]>{
   return this.http.get<Post[]>(this.appiBaseUrl + "posts");
  }

  getPostById(id:number): Observable<Post>{
    return this.http.get<Post>(this.appiBaseUrl+"posts/"+id)

  }

}
