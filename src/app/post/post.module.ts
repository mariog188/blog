import { CommentModule } from '../comment/comment.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';

@NgModule({
	declarations: [ PostComponent ],
	imports: [ CommonModule, CommentModule ],
	exports: [ PostComponent ],
})
export class PostModule {}
