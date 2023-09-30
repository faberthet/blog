import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-cards-four-columns',
  templateUrl: './cards-four-columns.component.html',
  styleUrls: ['./cards-four-columns.component.css']
})
export class CardsFourColumnsComponent {

  @Input() posts:Post[]=[];
  

}
