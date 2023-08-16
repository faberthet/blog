import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component'
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FourImagesComponent } from './posts-templates/four-images/four-images.component';
import { FiveImagesComponent } from './posts-templates/five-images/five-images.component';
import { CardsThreeColumnsComponent } from './posts-templates/cards-three-columns/cards-three-columns.component';
import { CardsFourColumnsComponent } from './posts-templates/cards-four-columns/cards-four-columns.component';
import { TwoCardsLeftComponent } from './posts-templates/two-cards-left/two-cards-left.component';
import { TwoCardsRightComponent } from './posts-templates/two-cards-right/two-cards-right.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AdminCategoriesComponent } from './admin/categories/admin-categories/admin-categories.component';
import { AdminCategoryLineComponent } from './admin/categories/admin-category-line/admin-category-line.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent,
    PostsComponent,
    PostComponent,
    FourImagesComponent,
    FiveImagesComponent,
    CardsThreeColumnsComponent,
    CardsFourColumnsComponent,
    TwoCardsLeftComponent,
    TwoCardsRightComponent,
    AdminCategoriesComponent,
    AdminCategoryLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
    
   // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
