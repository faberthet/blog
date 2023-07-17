import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  post:Post=new Post();

  constructor(private postService:PostService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => 
      { 
        var id= Number(params.get('id'));
        this.postService.getPostById(id).subscribe({
          next: data => this.post=data,
          error: error => console.log(error)
        })
      })
  }

}
