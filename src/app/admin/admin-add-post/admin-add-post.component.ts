import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { AddPostDto } from 'src/app/models/addPostDto';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {
  post:AddPostDto=new AddPostDto();
  editorContent:string="";
  public Editor= DecoupledEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
};

  constructor(private postService:PostService,private router: Router){
  }

  ngOnInit(): void {
    console.log(this.post)
    // this.post.title=""
  }
  
  onSubmit():void{
    // this.post.author="fabrice"
    this.post.content=this.editorContent;
    this.post.summary=this.post.content.substring(0,100)+"...";
    this.post.publishDate=new Date();
    this.post.updatedDate=new Date();
    this.postService.addPost(this.post).subscribe({
      next: response => [console.log(response),this.router.navigate(['/admin/posts'])],
      error: error => console.log(error)
    })
    // console.log(this.post)
  }

  public onReady( editor: DecoupledEditor ): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(
      editor.ui.view.toolbar.element!,
      element
    );
  }

}
