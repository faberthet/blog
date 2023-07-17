import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { AddPostDto } from '../models/addPostDto';
import { UpdatePostDto } from '../models/updatePostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiBaseUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) {}

  getAllPosts():Observable<Post[]>{
   return this.http.get<Post[]>(this.apiBaseUrl + "posts");
  }

  getPostById(id:number): Observable<Post>{
    return this.http.get<Post>(this.apiBaseUrl+"posts/"+id)

  }
  updatePost(id:number,post:UpdatePostDto): Observable<Post>{
    return this.http.put<Post>(this.apiBaseUrl+"posts/" + id,post)
  }
  addPost(post:AddPostDto): Observable<Post>{
    return this.http.post<Post>(this.apiBaseUrl+"posts/",post)
  }
  deletePost(id:number): Observable<Post>{
    return this.http.delete<Post>(this.apiBaseUrl+"posts/"+id)
  }
}
