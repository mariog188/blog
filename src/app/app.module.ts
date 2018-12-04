import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommentModule } from './comment/comment.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { PostModule } from './post/post.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		PostModule,
		CommentModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatTableModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
