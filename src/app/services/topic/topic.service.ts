import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {



    private apiUrl = '/api/v1/topics/';

  constructor(private httpClient: HttpClient) { }

  getTopics(){
    return this.httpClient.get(this.apiUrl);
  }
}
