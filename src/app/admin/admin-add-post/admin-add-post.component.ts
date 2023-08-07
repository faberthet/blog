import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
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

  constructor(private postService:PostService,private router: Router){
  }

  ngOnInit(): void {
    console.log(this.post)
    // this.post.title=""
  }
  
  onSubmit():void{
    this.post.urlHandle=""
    // this.post.author="fabrice"
    this.post.summary=this.post.content.substring(0,100)+"..."
    this.post.publishDate=new Date();
    this.post.updatedDate=new Date();
    this.postService.addPost(this.post).subscribe({
      next: response => [console.log(response),this.router.navigate(['/admin/posts'])],
      error: error => console.log(error)
    })
    // console.log(this.post)
  }

}
