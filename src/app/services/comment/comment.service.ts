import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = '/api/v1/topics/';

  constructor(private httpClient: HttpClient) { }


  getAllCommentByPost(id){
    return this.httpClient.get(this.apiUrl + id + '/comments');
  }

  createComment(id, newComment){

    return this.httpClient.post(this.apiUrl + id + '/comments', newComment)
  }
}
