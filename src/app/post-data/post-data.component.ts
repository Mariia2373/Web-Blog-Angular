import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { Input } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../Comments';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  'post':BlogPost = new BlogPost(); 

  querySub:any= [];
  commentName: string = "";
  commentText: string = "";
  newComment:Comments = new Comments(); 

  submitComment(){
    this.newComment.author = this.commentName; 
    this.newComment.comment = this.commentText;
    this.newComment.date = new Date().toLocaleDateString();
    this.post.comments.push(this.newComment);
    this.list.updatePostById(this.post._id,this.post).subscribe();

    this.commentName = "";
    this.commentText = "";
    this.newComment = new Comments; 

  }

  constructor(private list: PostService, private route: ActivatedRoute) { }
  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }
  ngOnInit(): void {
    this.post.comments = [];
    this.querySub = this.route.params.subscribe(params =>{
      this.list.getPostbyId(params['id']).subscribe(
        data => this.post = data);
     })
  }

}
