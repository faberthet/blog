import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  post!:Post;
  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      params => 
      { 
        var id= Number(params.get('id'));
        if (id){
          this.postService.getPostById(id).subscribe(
          response => this.post=response
          )
        }
      }
    )

  }

}
