import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ CommentComponent ],
	imports: [ CommonModule, MatListModule ],
	exports: [ CommentComponent ],
})
export class CommentModule {}
