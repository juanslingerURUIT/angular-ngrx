import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentTableComponent } from './comment-table/comment-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UsersComponent } from './users.component';
import { UserTableComponent } from './user-table/user-table.component';
import { PostService } from '../shared';

@NgModule({
	declarations: [
		CommentTableComponent,
		PostTableComponent,
		UserTableComponent,
		UsersComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		UsersComponent
	],
	providers: [PostService]
})
export class UsersModule {}
