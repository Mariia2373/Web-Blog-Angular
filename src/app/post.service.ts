import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://nameless-journey-15580.herokuapp.com/'; 

  getAllPosts():Observable<BlogPost[]>{
    var address = this.url + 'api/posts?page=1&perPage=' + Number.MAX_SAFE_INTEGER;
    return this.http.get<BlogPost[]>(address); 
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(this.url + `api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    var address = this.url + 'api/posts/' + id;
    return this.http.put<any>(address, data);
  }

  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(this.url + `api/posts/${id}`);
  }
  

  getPosts( page:number, tag:string, category:string): Observable<BlogPost[]>{
    var address = this.url + 'api/posts?page='+page+'&perPage=6';
    if(tag.length > 0){
      var t = tag.replace('#', '');
      address += '&tag=' + t;
    }

    if(category.length > 0){
      address += '&category=' + category; 
    }

    return this.http.get<BlogPost[]>(address); 
  }

  getPostbyId(id:string): Observable<BlogPost>{
      var address = this.url + 'api/posts/' + id; 
      return this.http.get<BlogPost>(address); 
  }

  getCategories(): Observable<any>{
    var address = this.url + 'api/categories';
    return this.http.get<any>(address); 
  }

  getTags(): Observable<string[]>{
    var address = this.url + 'api/tags';
    return this.http.get<string[]>(address); 
  }

  constructor(private http:HttpClient) { }
}
