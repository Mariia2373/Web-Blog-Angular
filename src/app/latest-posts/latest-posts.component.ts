import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { Input } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  @Input() 'posts':BlogPost[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
