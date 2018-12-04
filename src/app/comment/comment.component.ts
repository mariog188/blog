import { ApiService } from 'src/app/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { parseHostBindings } from '@angular/compiler';
import { Post } from './../post/post.interface';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ],
})
export class CommentComponent implements OnInit {
	@Input() Post: Post;
	url = 'https://jsonplaceholder.typicode.com/comments';
	comments$: Observable<Comment[]>;

	constructor(private apiservice: ApiService) {}

	ngOnInit() {
		debugger;
		this.comments$ = this.apiservice.getData<Comment[]>(
			this.url + '?postId=' + this.Post.id,
		);
	}
}
