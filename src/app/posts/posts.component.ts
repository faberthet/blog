import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[]
  imagesPath:string=environment.imagesPath

  constructor(private postServices:PostService){}

  ngOnInit(): void {
    this.postServices.getAllPosts().subscribe({
      next: data => this.posts=data,
      error: error => console.log(error)
    })
  }

}
