import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topics;


  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    return this.topicService.getTopics().subscribe(
      (data: any) => {
        this.topics = data.content;
      }
    );
  }

}
