import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  loadedPosts: Post[] = [];
  isFetching = false;
  errorMessage = '';
  errorSub: Subscription;


  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit(): void {
    this.fetchPost();
    this.errorSub=this.postService.error.subscribe(
      errorMessage => {
        this.errorMessage = errorMessage;
      }
    );
  }





  onCreatePost(postData:{ title: string, content: string }) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }




  onFetchPosts() {
    this.fetchPost();
  }

  onClearPosts() {
    this.postService.deletePost().subscribe(
      (data)=> {
        console.log(data);
        this.loadedPosts = [];
      }
    );
  }


  private fetchPost() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, (error) => {
        this.errorMessage = error.message;
        this.isFetching = false;
      }
    );
  }


  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onErrorHandling() {
    this.errorMessage = null;
  }


}
