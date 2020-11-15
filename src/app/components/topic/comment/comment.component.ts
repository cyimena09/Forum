import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../services/comment/comment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() topicId
  comments;
  commentForm: FormGroup;

  constructor(private commentService: CommentService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllCommentByPost();
  }

    initForm(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  getAllCommentByPost(){
    return this.commentService.getAllCommentByPost(this.topicId).subscribe(
      (data: any) => {
        this.comments = data.content;}
    );
  }

  onComment(){
    let text = this.commentForm.value.comment;
    let newComment = {text: text}

    return this.commentService.createComment(this.topicId, newComment).subscribe(
      () => {
        this.getAllCommentByPost();
      }
    );
  }


}
