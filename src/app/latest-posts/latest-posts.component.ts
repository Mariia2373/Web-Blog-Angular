import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  'posts':BlogPost[] = [];  

  constructor(private list: PostService) { }

  ngOnInit(): void {
    this.list.getPosts(1, '', '').subscribe( data => this.posts = data.slice(0,3));
  }

}
