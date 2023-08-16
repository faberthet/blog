import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  
  categories:Category[]=[];
  categoryName:string="";

  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe({
      next: response => this.categories=response,
      error: error => console.log(error)
})
  }

  addCategory(){
    if(this.categoryName!=""){
      this.categoryService.addCategory(this.categoryName).subscribe({
        next: response => [console.log(response),this.getCategories()],
        error: error => console.log(error)
      })
    }
  }
  delete(id:number, title:string):void{
    if(confirm("Are you sure to delete "+title)) {
      this.categoryService.deleteCategory(id).subscribe({
        next: response => [this.getCategories(), console.log(response)],
        error: error => console.log(error)
      })
    }
  }

  // à tester à la place de this.getcategories() dans la fonction delete
  // pour limiter les requetes http
  deleteCategory(id:number){
    const index=this.categories.findIndex(x => x.id === id)
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }

 
}
