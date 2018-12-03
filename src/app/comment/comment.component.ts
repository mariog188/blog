import { ApiService } from 'src/app/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { parseHostBindings } from '@angular/compiler';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ],
})
export class CommentComponent implements OnInit {
	@Input() idpost;
	url = 'https://jsonplaceholder.typicode.com/comments';
	comments$: Observable<Comment[]>;

	constructor(private apiservice: ApiService) {}

	ngOnInit() {
		this.comments$ = this.apiservice.getData<Comment[]>(
			this.url + '?postId=' + this.idpost,
		);
	}
}
