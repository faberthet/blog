import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiBaseUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) {}

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiBaseUrl + "Categories");
   }
 
   getCategoryById(id:number): Observable<Category>{
     return this.http.get<Category>(this.apiBaseUrl+"Categories/"+id)
 
   }
   updateCategory(id: number, newName:string): Observable<Category>{
     return this.http.put<Category>(this.apiBaseUrl+"Categories/" + id,newName)
   }
   addCategory(CategoryName:string): Observable<Category>{
     return this.http.post<Category>(this.apiBaseUrl+"Categories/",CategoryName)
   }
   deleteCategory(id:number): Observable<Category>{
     return this.http.delete<Category>(this.apiBaseUrl+"Categories/"+id)
   }
}
