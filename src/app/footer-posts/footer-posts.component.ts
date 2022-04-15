import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  'posts':BlogPost[] = [];  

  constructor(private list: PostService) { }

  ngOnInit(): void {
    this.list.getPosts(1, '', '').subscribe( data => this.posts = data.slice(0,3));
  }

}
