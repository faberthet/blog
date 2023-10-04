import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-four-images',
  templateUrl: './four-images.component.html',
  styleUrls: ['./four-images.component.css']
})
export class FourImagesComponent {
  @Input() posts:Post[]=[];
}
