import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommentModule } from './comment/comment.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostModule } from './post/post.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		PostModule,
		CommentModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
