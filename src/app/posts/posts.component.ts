import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[]

  constructor(private postServices:PostService){}

  ngOnInit(): void {
    this.postServices.getAllPosts().subscribe({
      next: data => this.posts=data,
      error: error => console.log(error)
    })
  }

}
