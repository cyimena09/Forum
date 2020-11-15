import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../services/topic/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private topicService: TopicService) { }

  ngOnInit(): void {
  }
}
