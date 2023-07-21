import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  post:Post=new Post();
 
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      params => 
      { 
        var id= Number(params.get('id'));
        if (id){
          this.postService.getPostById(id).subscribe({
          next: response => this.post=response,
          error: error => console.log(error)
        })
        }
      })
  }

  onSubmit():void{
    this.post.summary=this.post.content.substring(0,200)+"..."
    this.postService.updatePost(this.post.id,this.post).subscribe({
      next: response => [console.log(response), this.router.navigate(['/admin/posts'])],
      error: error => console.log(error)
    })
  }

}
