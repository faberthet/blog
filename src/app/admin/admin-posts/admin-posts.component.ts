import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit{

  posts:Post[]=[]

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => this.posts=response
    )
  }

}
