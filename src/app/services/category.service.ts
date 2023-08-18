import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from '../models/categories/Category';
import { Observable } from 'rxjs';
import { AddCategoryDto } from '../models/categories/addCategoryDto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiBaseUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) {}

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiBaseUrl + "category");
   }
 
   getCategoryById(id:number): Observable<Category>{
     return this.http.get<Category>(this.apiBaseUrl+"category/"+id)
 
   }
   updateCategory(editedCategory:Category): Observable<Category>{
     return this.http.put<Category>(this.apiBaseUrl+"category/" + editedCategory.id,editedCategory)
   }
   addCategory(CategoryName:AddCategoryDto): Observable<Category>{
     return this.http.post<Category>(this.apiBaseUrl+"category/",CategoryName)
   }
   deleteCategory(id:number): Observable<Category>{
     return this.http.delete<Category>(this.apiBaseUrl+"Category/"+id)
   }
}
