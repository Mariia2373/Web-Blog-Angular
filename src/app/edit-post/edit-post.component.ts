import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost;
  tags: string = "";
  id:string = ""; 
  

  constructor(private post:PostService, private route:Router, private activeRoute:ActivatedRoute) { }

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.post.updatePostById(this.blogPost._id,this.blogPost).subscribe(); 
    this.route.navigate(['admin']);
  }

  deltePost(){
    this.post.deletePostById(this.blogPost._id).subscribe();
    this.route.navigate(['admin']);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id']; 
   });
    this.post.getPostbyId(this.id).subscribe(data =>{ this.blogPost = data; this.tags = data.tags.toString();});
  }


}
