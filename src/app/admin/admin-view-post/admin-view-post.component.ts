import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'
import { UpdatePostDto } from 'src/app/models/updatePostDto';
import { Category } from 'src/app/models/categories/Category';
import { environment } from 'src/environments/environment.development';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  post:Post=new Post();
  categories:Category[]=[];
  // post:UpdatePostDto=new UpdatePostDto();
  editorContent:string="";
  
  public Editor= CustomEditor;
 
  apiBaseUrl = environment.apiBaseUrl
 
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router,private categoryService:CategoryService){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      params => 
      { 
        var id= Number(params.get('id'));
        if (id){
          this.getPostById(id)
        }
      })
      this.getCategories();
  }

  getPostById(id:number){
    this.postService.getPostById(id).subscribe({
      next: response => [this.post=response,
         this.editorContent=this.post.content
         .replaceAll("C:\\Users\\faberthet\\Desktop\\dev\\aspNet\\blogfront\\src\\assets\\images\\ckupload\\","assets/images/ckupload/"),
        console.log(this.editorContent)],
      error: error => console.log(error)
    })
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe({
      next: response => [this.categories=response],
      error: error=>console.log(error)
    })
  }

  onSubmit():void{
    this.post.content=this.editorContent;
    this.post.summary=this.post.content.substring(0,200)+"..."
    this.postService.updatePost(this.post.id,this.post).subscribe({
      next: response => [console.log(response), this.router.navigate(['/admin/posts'])],
      error: error => console.log(error)
    })
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

}
