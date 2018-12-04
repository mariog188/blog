import { Component } from '@angular/core';
import { Post } from './post/post.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'Blog';
	Post: Post;
	postSelected = false;

	getSelectedPost(post: Post) {
		if (post) {
			this.postSelected = true;
		} else {
			this.postSelected = false;
		}
		this.Post = post;
	}
}
