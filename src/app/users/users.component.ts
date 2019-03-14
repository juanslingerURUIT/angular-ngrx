import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { GetPostComments, GetUsers, GetUserPosts } from '../store/actions';
import { selectPostCommentsList, selectUserPostsList, selectUsersList } from '../store/selectors';
import { IAppState } from '../store/state';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
	usersList$ = this.store.pipe(select(selectUsersList));
	userPostsList$ = this.store.pipe(select(selectUserPostsList));
	postCommentsList$ = this.store.pipe(select(selectPostCommentsList));

	constructor(private store: Store<IAppState>){}

	ngOnInit(): void {
		this.store.dispatch(new GetUsers());
	}

	selectedUser(userId: number): void {
		this.store.dispatch(new GetUserPosts(userId));
	}

	selectedPost(postId: number): void {
		this.store.dispatch(new GetPostComments(postId));
	}
}
