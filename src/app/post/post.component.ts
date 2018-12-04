import { ApiService } from './../api.service';
import { Observable } from 'rxjs';
import { Post } from './post.interface';
import {
	Component,
	OnInit,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ],
})
export class PostComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/posts';
	posts$: Observable<Post[]>;
	@Output() selectedPost = new EventEmitter<Post>();

	constructor(private apiservice: ApiService) {
		this.posts$ = apiservice.getData<Post[]>(this.url);
	}

	ngOnInit() {}

	selectPost(post: Post) {
		this.selectedPost.emit(post);
	}
}
