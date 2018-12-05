import { ApiService } from 'src/app/api.service';
import {
	Component,
	Input,
	OnChanges,
	OnInit
	} from '@angular/core';
import { Observable } from 'rxjs';
import { parseHostBindings } from '@angular/compiler';
import { Post } from './../post/post.interface';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ],
})
export class CommentComponent implements OnInit, OnChanges {
	@Input() Post: Post;
	url = 'https://jsonplaceholder.typicode.com/comments';
	comments$: Observable<Comment[]>;

	constructor(private apiservice: ApiService) {}

	ngOnInit() {}

	ngOnChanges() {
		this.comments$ = this.apiservice.getData<Comment[]>(
			this.url + '?postId=' + this.Post.id,
		);
	}
}
