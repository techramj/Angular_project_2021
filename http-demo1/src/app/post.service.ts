import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map,catchError, tap } from "rxjs/operators";

import { Post } from "./post.model";



@Injectable({providedIn:'root'})
export class PostService {

  error = new Subject<string>();

  postedPost: Post[] = [];
  postUrl = "https://http-demo-48f26-default-rtdb.firebaseio.com/posts.json";

  constructor(private http: HttpClient) { }

  createAndStorePost1(title: string, content: string) {
    const postData: { title: string, content: string } = { title: title, content: content };
    this.http.post<{name:string}>("https://http-demo-48f26-default-rtdb.firebaseio.com/posts.json",
      postData).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.errorMessage);
      });
  }


  createAndStorePost(title: string, content: string) {
    const postData: { title: string, content: string } = { title: title, content: content };
    this.http.post<{ name: string }>
      ("https://http-demo-48f26-default-rtdb.firebaseio.com/posts.json",
        postData, {
          observe:'response'
        }).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.errorMessage);
      });
  }

  fetchPost() {
    let param = new HttpParams();
    param = param.append('print', 'pretty');
    param = param.append('custom-param', 'custom key');
    return this.http.
      get<{ [key: string]: Post }>
      ("https://http-demo-48f26-default-rtdb.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
          params: param,
          responseType:'json'
        }


    ).
      pipe(
        map(
          (responseData) => {
            const arr: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                arr.push({ ...responseData[key], id: key });
              }
            }
            return arr;
          }), catchError(
            errorRes => {
              console.log(errorRes);
              //send the analystic error
              return throwError(errorRes);
            }
          ));
  }

  deletePost() {
    return this.http.delete(this.postUrl, {
      observe:'events'
    }).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
      if (event.type === HttpEventType.Sent) {

      }
    }));
  }

}
