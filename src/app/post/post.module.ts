import { CommentModule } from '../comment/comment.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';

@NgModule({
	declarations: [ PostComponent ],
	imports: [ CommonModule, MatCardModule, MatListModule ],
	exports: [ PostComponent ],
})
export class PostModule {}
