import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/categories/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-line',
  templateUrl: './admin-category-line.component.html',
  styleUrls: ['./admin-category-line.component.css']
})
export class AdminCategoryLineComponent {

  @Input() category!:Category;
  rename:boolean=false;
  newName:string="";

  constructor(private categoryService:CategoryService){}

  toggleRename(){
    this.rename= !this.rename
  }

  update(){
    if(this.newName!=""){
      if(confirm("rename "+ this.category.name + " to " + this.newName)){
        const editedCategory:Category=new Category()
        editedCategory.id=this.category.id
        editedCategory.name=this.newName
        this.categoryService.updateCategory(editedCategory).subscribe({
          next: response => [console.log(response),this.category.name=this.newName,this.toggleRename()],
          error: error => console.log(error)
        })
      }
    }else{
      alert("new name cannot be empty")
    }
  }
}
