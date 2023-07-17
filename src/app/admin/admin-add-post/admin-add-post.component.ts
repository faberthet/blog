import { Component, OnInit } from '@angular/core';
import { AddPostDto } from 'src/app/models/addPostDto';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {
  post:AddPostDto=new AddPostDto();

  constructor(private postService:PostService){
  }

  ngOnInit(): void {
    console.log(this.post)
    // this.post.title=""
  }
  
  onSubmit():void{
    this.postService.addPost(this.post).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
    // console.log(this.post)
  }

}
