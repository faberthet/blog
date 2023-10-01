import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { AdminCategoriesComponent } from './admin/categories/admin-categories/admin-categories.component';

const routes: Routes = [
  {path:"",component:PostsComponent},
  {path:"admin/posts",component:AdminPostsComponent},
  {path:"admin/posts/add",component:AdminAddPostComponent},
  {path:"admin/posts/:id",component:AdminViewPostComponent},
  {path:"admin/categories",component:AdminCategoriesComponent},
  
  {path:"posts/:id",component:PostComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
