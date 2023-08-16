import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { AddPostDto } from 'src/app/models/addPostDto';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'

import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  post:AddPostDto=new AddPostDto();
  editorContent:string="";
  
  public Editor= CustomEditor;
 
  apiBaseUrl = environment.apiBaseUrl

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

 

 

public config = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'link',
      '|',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      '|',
      'fontColor',
      'fontBackgroundColor',
      'fontFamily',
      'fontSize',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'subscript',
      'superscript'
    ]
  },
  language: 'en',
  image: {
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
  simpleUpload: {
    // The URL that the images are uploaded to.
    uploadUrl: this.apiBaseUrl + "api/file/ckeditor-image",

}
}

public config2={
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'fontFamily',
      // 'fontSize', // ne marche pas
      'fontColor',
      'fontBackgroundColor',
      '|',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'alignment',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'highlight',
      'imageInsert',
      //'specialCharacters', //ne fonctionne pas
      'todoList'
    ]
  },
  language: 'fr',
  image: {
    toolbar: [
      'imageTextAlternative',
      // 'imageStyle:inline',
      // 'imageStyle:block',
      // 'imageStyle:side',
      'linkImage',
      'toggleImageCaption',
      'resizeImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
  simpleUpload: {
    // The URL that the images are uploaded to.
    uploadUrl: this.apiBaseUrl + "",

}

}

}
