import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categories/Category';
import { Post } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit{

  posts:Post[]=[]
  categories:Category[]=[];
  
  constructor(private postService:PostService,private categoryService:CategoryService){}

  ngOnInit(): void {
    this.getAllPosts();
    this.getCategories();
  }
  delete(id:number, title:string):void{
    if(confirm("Are you sure to delete "+title)) {
      this.postService.deletePost(id).subscribe({
        next: response => [this.getAllPosts(), console.log(response)],
        error: error => console.log(error)
      })
    }
  }

  getAllPosts(){ //DTO TODO
    this.postService.getAllPosts().subscribe(
      response => this.posts=response
    )
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe({
      next: response => [this.categories=response],
      error: error=>console.log(error)
    })
  }
}
